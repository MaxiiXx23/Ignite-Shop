import { useContext, useEffect, useState } from 'react'

import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Stripe from 'stripe'

import { ShoppingCartContext } from '@/contexts/shoppingCartContext'

import { stripe } from '@/lib/stripe'
import { formatterPrice } from '@/utils/formatterPrice'

import {
  ProductContainer,
  ImageContainer,
  ProductDetails,
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

interface IGetServerSidePropsResult {
  props: {}
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{
  id: string
}>): Promise<IGetServerSidePropsResult> {
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
  }
}
