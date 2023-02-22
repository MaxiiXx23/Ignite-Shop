import { ReactNode, createContext, useReducer } from 'react'

import { shoppingCartReducer, IProduct } from '@/reducers/shoppingCartReducer'
import {
  addNewProductAction,
  changeCountCartAction,
  removeProductCartAction,
} from '@/reducers/shoppingCartReducer/actions'

interface IShoppingCartContext {
  productsSelected: IProduct[]
  countCart: number
  totalValue: number
  addProductCart: (produc: IProduct) => void
  removeProductCart: (productId: string) => void
}

interface IShoppingCartProvider {
  children: ReactNode
}

export const ShoppingCartContext = createContext<IShoppingCartContext>(
  {} as IShoppingCartContext,
)

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cartState, dispatch] = useReducer(shoppingCartReducer, {
    productsSelected: [],
    countCart: 0,
    totalValue: 0,
  })

  function addProductCart(product: IProduct) {
    dispatch(addNewProductAction(product))
    dispatch(changeCountCartAction())
  }

  function removeProductCart(productId: string) {
    dispatch(removeProductCartAction(productId))
    dispatch(changeCountCartAction())
  }

  const { countCart, productsSelected, totalValue } = cartState

  return (
    <ShoppingCartContext.Provider
      value={{
        productsSelected,
        countCart,
        totalValue,
        addProductCart,
        removeProductCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
