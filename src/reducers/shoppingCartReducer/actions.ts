import { ActionTypes, IActions, IProduct } from '.'

export function addNewProductAction(product: IProduct): IActions {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      product,
    },
  }
}

export function changeCountCartAction(): IActions {
  return {
    type: ActionTypes.CHANGE_COUNT_CART,
    payload: {},
  }
}

export function removeProductCartAction(productId: string): IActions {
  return {
    type: ActionTypes.REMOVE_PRODUCT_SELECTED,
    payload: {
      productId,
    },
  }
}
