import { useContext, useEffect, useState } from 'react'

import { GetStaticPropsContext, GetStaticPathsResult } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

import { ShoppingCartContext } from '@/contexts/shoppingCartContext'

import { stripe } from '@/lib/stripe'
import { formatterPrice } from '@/utils/formatterPrice'

import {
  ProductContainer,
  ImageContainer,
  ProductDetails,
  Spinner,
  NameProduct,
  Price,
  Description,
  BtnAddCart,
} from '@/styles/pages/product'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    priceFormatted: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addProductCart, productsSelected } = useContext(ShoppingCartContext)
  const [productIsSelected, setProductIsSelected] = useState(false)

  function handleAddProductCart() {
    setProductIsSelected(true)
    addProductCart(product)
  }

  const { isFallback } = useRouter()

  if (isFallback) {
    return <Spinner />
  }

  const titlePage = `${product.name} | Ignite Shop`

  useEffect(() => {
    const productAlreadySelected = productsSelected.find(
      (productSelected) => productSelected.id === product.id,
    )
    if (productAlreadySelected) {
      setProductIsSelected(true)
    } else {
      setProductIsSelected(false)
    }
  }, [productsSelected, product.id])

  return (
    <>
      <Head>
        <title>{titlePage}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} height={520} width={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <NameProduct>{product.name}</NameProduct>
          <Price>{product.priceFormatted}</Price>
          <Description>{product.description}</Description>
          <BtnAddCart
            onClick={handleAddProductCart}
            disabled={productIsSelected}
          >
            Colocar na sacola
          </BtnAddCart>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

interface IGetStaticPropsResult {
  props: {}
  revalidate: number
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [
      {
        params: { id: 'prod_NMX9sDvIu6pYOg' },
      },
    ],
    fallback: true,
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string }>): Promise<IGetStaticPropsResult> {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'], // default price of the item/product on stripe
  })

  const price = product.default_price as Stripe.Price

  const priceFormatted = formatterPrice(Number(price.unit_amount))

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        priceFormatted,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour to revalidate
  }
}
