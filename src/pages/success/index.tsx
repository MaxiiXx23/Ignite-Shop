import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

import { ImageContainer, SuccessContainer } from '@/styles/pages/success'

interface ISuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success({ customerName, product }: ISuccessProps) {
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={115} height={115} />
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua
          <strong>{product.name}</strong>
          já está a caminho da sua casa.
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
  const product = response.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
