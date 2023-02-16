import { GetServerSidePropsResult } from "next"
import Image from "next/image"

import Stripe from "stripe"
import { useKeenSlider } from "keen-slider/react"

import 'keen-slider/keen-slider.min.css'

import { stripe } from "@/lib/stripe"
import { formatterPrice } from "@/utils/formatterPrice"

import { HomeContainer, Product } from "@/styles/pages/home"

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {
        products.map(product => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image 
                src={product.imageUrl} 
                alt="" 
                placeholder="blur" 
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==" 
                width={520} 
                height={480} 
              />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          )
        })
      }
    </HomeContainer>
  )
}

type ProductsProps = {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: string
  }[]
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<ProductsProps>> {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {

    const price = product.default_price as Stripe.Price

    const priceFinal = price.unit_amount! / 100

    const priceFormatted = formatterPrice(priceFinal)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatted
    }
  })

  return {
    props: {
      products
    }
  }
}