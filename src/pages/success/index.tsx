import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

import {
  ImageContainer,
  SuccessContainer,
  WrapperImagesProducts,
} from '@/styles/pages/success'

interface ISuccessProps {
  customerName: string
  imageProducts: {
    imageUrl: string
  }[]
}

export default function Success({
  customerName,
  imageProducts,
}: ISuccessProps) {
  const totalProductsBought = imageProducts.reduce((acc, currentValue) => {
    return (acc = acc + 1)
  }, 0)

  const textTotalCamisas =
    totalProductsBought === 1
      ? `1 camisetas`
      : `${totalProductsBought} camisetas`

  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <WrapperImagesProducts>
          {imageProducts.map((image, index) => {
            return (
              <ImageContainer key={index}>
                <Image src={image.imageUrl} alt="" width={130} height={130} />
              </ImageContainer>
            )
          })}
        </WrapperImagesProducts>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <span>{textTotalCamisas}</span> já está a caminho da sua casa.
        </p>
        <Link href={'/'}>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const productId = query.session_id as string

  if (!productId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const response = await stripe.checkout.sessions.retrieve(productId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = response.customer_details?.name

  const imageProducts = response.line_items?.data.map(
    (item: Stripe.LineItem) => {
      const product = item.price?.product as Stripe.Product
      return {
        imageUrl: product.images[0],
      }
    },
  )

  return {
    props: {
      customerName,
      imageProducts,
    },
  }
}
