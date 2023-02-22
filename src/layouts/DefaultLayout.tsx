import { ReactNode, useState, useContext } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Handbag, X } from 'phosphor-react'
import axios, { AxiosResponse } from 'axios'

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

import { ShoppingCartContext } from '@/contexts/shoppingCartContext'
import { formatterPrice } from '@/utils/formatterPrice'

interface IDefaultLayoutProps {
  children: ReactNode
}
interface IResponseDataFetch {
  checkoutUrl: string
}

export function DefaultLayout({ children }: IDefaultLayoutProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const [isOpenMenuDrawer, setIsOpenMenuDrawer] = useState(false)

  const { countCart, totalValue, productsSelected, removeProductCart } =
    useContext(ShoppingCartContext)

  function handleOpenMenuDrawer() {
    setIsOpenMenuDrawer((state) => !state)
  }

  function handleRemoveItemCart(productId: string) {
    removeProductCart(productId)
  }

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)

      const productsCheckout = productsSelected.map((product) => {
        return {
          price: product.defaultPriceId,
          quantity: 1,
        }
      })

      const response: AxiosResponse<IResponseDataFetch> = await axios.post(
        '/api/checkout',
        {
          products: productsCheckout,
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

  const textCountCart = countCart === 1 ? `1 item` : `${countCart} itens`

  const totalValueFormatted = formatterPrice(totalValue)

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
              {productsSelected.map((product) => {
                return (
                  <Item key={product.id}>
                    <WrapperImage>
                      <Image
                        src={product.imageUrl}
                        alt=""
                        width={93}
                        height={93}
                      />
                    </WrapperImage>
                    <ContainerInfos>
                      <NameProduct>{product.name}</NameProduct>
                      <Price>{product.priceFormatted}</Price>
                      <BtnRemove
                        onClick={() => handleRemoveItemCart(product.id)}
                      >
                        Remover
                      </BtnRemove>
                    </ContainerInfos>
                  </Item>
                )
              })}
            </ListProducts>
            <ContainerDetailsCart>
              <WrapperQuantity>
                <TextQuantity>Quantidade</TextQuantity>
                <TextQuantityItems>{textCountCart}</TextQuantityItems>
              </WrapperQuantity>
              <WrapperTotalValue>
                <TextTotalValue>Valor total</TextTotalValue>
                <TotalValue>{totalValueFormatted}</TotalValue>
              </WrapperTotalValue>
              <ButtonConfirm
                onClick={handleBuyProducts}
                disabled={isCreatingCheckoutSession}
              >
                Finalizar compra
              </ButtonConfirm>
            </ContainerDetailsCart>
          </Content>
        </ContainerMenuDrawer>
      ) : null}
      {children}
    </Container>
  )
}
