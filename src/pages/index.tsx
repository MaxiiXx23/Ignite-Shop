import { GetServerSidePropsResult } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import { stripe } from '@/lib/stripe'
import { formatterPrice } from '@/utils/formatterPrice'

import {
  FooterProduct,
  HomeContainer,
  NameProduct,
  Price,
  Product,
  WrapperInfos,
} from '@/styles/pages/home'
import { ShoppingCartContainer } from '@/styles/pages/app'
import { Handbag } from 'phosphor-react'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image
                  src={product.imageUrl}
                  alt=""
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                  width={520}
                  height={480}
                />
                <FooterProduct>
                  <WrapperInfos>
                    <NameProduct>{product.name}</NameProduct>
                    <Price>{product.price}</Price>
                  </WrapperInfos>
                  <ShoppingCartContainer colorVariant="green">
                    <Handbag size={24} />
                  </ShoppingCartContainer>
                </FooterProduct>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

type ProductsProps = {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<ProductsProps>
> {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    const priceFinal = price.unit_amount! / 100

    const priceFormatted = formatterPrice(priceFinal)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatted,
    }
  })

  return {
    props: {
      products,
    },
  }
}
