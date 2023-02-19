import { GetStaticPropsContext, GetStaticPathsResult } from "next"
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";

import { stripe } from "@/lib/stripe";
import { formatterPrice } from "@/utils/formatterPrice";

import { ProductContainer, ImageContainer, ProductDetails } from "@/styles/pages/product"


interface ProductProps {
    product: {
      id: string,
      name: string,
      imageUrl: string,
      price: string,
      description: string,
      defaultPriceId: string
    }
  }

export default function Product({ product }:ProductProps) {

    function handleBuyProduct () {
        console.log(product.defaultPriceId)
    }

    const { isFallback } = useRouter()

    if(isFallback) {
        return (
            <p>Is loading, please wait! S2</p>
        )
    }
 
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} height={520} width={480} alt="" />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button onClick={handleBuyProduct}>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

interface IGetStaticPropsResult {
    props: {},
    revalidate: number;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    return {
        paths: [
            {
                params: { id: 'prod_NMX9sDvIu6pYOg'}
            }
        ],
        fallback: true
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext<{id: string}>): Promise<IGetStaticPropsResult> {

    const productId = params!.id

    const product = await stripe.products.retrieve(productId,{
        expand: ['default_price'] // default price of the item/product on stripe
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
            defaultPriceId: price.id
        }
      },
      revalidate: 60 * 60 * 1, // 1 hour to revalidate
    }
  }