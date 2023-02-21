import { ReactNode, useState, useContext } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Handbag, X } from 'phosphor-react'

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
  CountCartContainer,
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
  WrapperNumber,
  WrapperQuantity,
  WrapperTitle,
  WrapperTotalValue,
} from '@/styles/pages/defaultLayout'

import ImageTestProduct from '@/assets/t-shirt1.png'

import { ShoppingCartContext } from '@/contexts/shoppingCartContext'

interface IDefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: IDefaultLayoutProps) {
  const [isOpenMenuDrawer, setIsOpenMenuDrawer] = useState(false)
  const { countCart } = useContext(ShoppingCartContext)

  function handleOpenMenuDrawer() {
    setIsOpenMenuDrawer((state) => !state)
  }

  // console.log(countCart)

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
          <CountCartContainer>
            <WrapperNumber>
              <strong>{countCart}</strong>
            </WrapperNumber>
          </CountCartContainer>
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
      {children}
    </Container>
  )
}
