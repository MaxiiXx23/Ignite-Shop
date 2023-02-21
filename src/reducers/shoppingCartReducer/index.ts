interface IProduct {
  id: string
  name: string
  price: string
}

interface ICartStateReducer {
  productsSelected: IProduct[]
  countCart: number
}

export enum ActionTypes {
    'ADD_NEW_PRODUCT' = 'ADD_NEW_PRODUCT',
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
  return {
    ...state,
  }
}
