import { useState } from 'react'

import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

import { Handbag, X } from 'phosphor-react'

import { globalStyles } from '@/styles/globalStyle'

import LogoSVG from '@/assets/Logo.svg'
import {
  BtnClose,
  BtnRemove,
  ButtonConfirm,
  Container,
  ContainerDetailsCart,
  ContainerInfos,
  ContainerMenuDrawer,
  Content,
  Header,
  Item,
  ListProducts,
  NameProduct,
  Price,
  ShoppingCartContainer,
  TextQuantity,
  TextQuantityItems,
  TextTotalValue,
  TitleMenuDrawer,
  TotalValue,
  WrapperBtnClose,
  WrapperImage,
  WrapperQuantity,
  WrapperTitle,
  WrapperTotalValue,
} from '@/styles/pages/app'

import ImageTestProduct from '@/assets/t-shirt1.png'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isOpenMenuDrawer, setIsOpenMenuDrawer] = useState(false)

  function handleOpenMenuDrawer() {
    setIsOpenMenuDrawer((state) => !state)
  }

  return (
    <Container>
      <Header>
        <Link href="/" prefetch={false}>
          <Image src={LogoSVG} alt="" />
        </Link>
        <ShoppingCartContainer
          onClick={handleOpenMenuDrawer}
          colorVariant="gray"
        >
          <Handbag size={24} fill="bold" />
        </ShoppingCartContainer>
      </Header>
      {isOpenMenuDrawer ? (
        <ContainerMenuDrawer>
          <WrapperBtnClose>
            <BtnClose onClick={handleOpenMenuDrawer}>
              <X size={24} />
            </BtnClose>
          </WrapperBtnClose>
          <WrapperTitle>
            <TitleMenuDrawer>Sacola de compras</TitleMenuDrawer>
          </WrapperTitle>
          <Content>
            <ListProducts>
              <Item>
                <WrapperImage>
                  <Image src={ImageTestProduct} alt="" width={93} height={93} />
                </WrapperImage>
                <ContainerInfos>
                  <NameProduct>Camiseta Beyond the Limits</NameProduct>
                  <Price>R$ 69,95</Price>
                  <BtnRemove>Remover</BtnRemove>
                </ContainerInfos>
              </Item>
            </ListProducts>
            <ContainerDetailsCart>
              <WrapperQuantity>
                <TextQuantity>Quantidade</TextQuantity>
                <TextQuantityItems>1 item</TextQuantityItems>
              </WrapperQuantity>
              <WrapperTotalValue>
                <TextTotalValue>Valor total</TextTotalValue>
                <TotalValue>R$ 69,95</TotalValue>
              </WrapperTotalValue>
              <ButtonConfirm>Finalizar compra</ButtonConfirm>
            </ContainerDetailsCart>
          </Content>
        </ContainerMenuDrawer>
      ) : null}
      <Component {...pageProps} />
    </Container>
  )
}
