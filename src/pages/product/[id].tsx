import { useState } from 'react'

import { GetStaticPropsContext, GetStaticPathsResult } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import axios, { AxiosResponse } from 'axios'

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
    price: string
    description: string
    defaultPriceId: string
  }
}

interface IResponseDataFetch {
  checkoutUrl: string
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response: AxiosResponse<IResponseDataFetch> = await axios.post(
        '/api/checkout',
        {
          priceId: product.defaultPriceId,
        },
      )

      const { checkoutUrl } = response.data

      // redicionando para a tela de checkout dentro do  Stripe
      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Error on the process of checkout! Please, try again.')
    }
  }

  const { isFallback } = useRouter()

  if (isFallback) {
    return <Spinner />
  }

  const titlePage = `${product.name} | Ignite Shop`

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
          <Price>{product.price}</Price>
          <Description>{product.description}</Description>
          <BtnAddCart
            onClick={handleBuyProduct}
            disabled={isCreatingCheckoutSession}
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

  const priceConverted = Number(price.unit_amount) / 100

  const priceFormatted = formatterPrice(priceConverted)

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: priceFormatted,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour to revalidate
  }
}
