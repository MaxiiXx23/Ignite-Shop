import { ReactNode, createContext, useReducer } from 'react'

import { shoppingCartReducer } from '@/reducers/shoppingCartReducer'

interface IShoppingCartContext {
  countCart: number
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
    countCart: 5,
  })

  const { countCart } = cartState

  return (
    <ShoppingCartContext.Provider
      value={{
        countCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
