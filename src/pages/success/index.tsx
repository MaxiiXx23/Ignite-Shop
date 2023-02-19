import Image from "next/image";
import Link from "next/link";

import { ImageContainer, SuccessContainer } from "@/styles/pages/success";


import ImageProduct from "@/assets/t-shirt1.png"

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Compra efetuada!</h1>
            <ImageContainer>
                <Image src={ImageProduct} alt="" width={115} height={115} />
            </ImageContainer>
            <p>
                Uhuul <strong>Max Jonatas</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa. 
            </p>
            <Link href={'/'}>
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}