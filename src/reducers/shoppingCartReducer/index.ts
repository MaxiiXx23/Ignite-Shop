export interface IProduct {
  id: string
  name: string
  imageUrl: string
  priceFormatted: string
  price: number,
  description: string
  defaultPriceId: string
}

interface ICartStateReducer {
  productsSelected: IProduct[]
  countCart: number,
  totalValue: number
}

export enum ActionTypes {
    'ADD_NEW_PRODUCT' = 'ADD_NEW_PRODUCT',
    'CHANGE_COUNT_CART' = 'CHANGE_COUNT_CART',
    'REMOVE_PRODUCT_SELECTED' = 'REMOVE_PRODUCT_SELECTED',
}

export interface IActions {
  type: ActionTypes
  payload?: any
}

export function shoppingCartReducer(
  state: ICartStateReducer,
  action: IActions,
) {
  
  switch(action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {

      return {
        ...state,
        productsSelected: [...state.productsSelected, action.payload.product],
      }
    }

    case ActionTypes.REMOVE_PRODUCT_SELECTED: {

      const newListProducts = state.productsSelected.filter((product) => product.id !== action.payload.productId)

      return {
        ...state,
        productsSelected: [...newListProducts]
      }

    }

    case ActionTypes.CHANGE_COUNT_CART: {
      const totalItemsAdded = state.productsSelected.reduce((acc, currentValue) => {
        return acc = acc +1
      }, 0)

      const totalValue = state.productsSelected.reduce((accPrice, currentValue) => {
        return accPrice += currentValue.price
      }, 0)
      
      return {
        ...state,
        countCart: totalItemsAdded,
        totalValue: totalValue
      }
    }

    default: {
      return {
        ...state
      }
    }
  }

}
