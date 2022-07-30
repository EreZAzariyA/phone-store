import CartItemDetailsModel from "Models/Cart-Item-Details-Model";

export class CartState {
      itemsInCart: CartItemDetailsModel[] = [];

      constructor() {
            const itemsInCart = localStorage.getItem("itemsInCart");
            if (itemsInCart) {
                  this.itemsInCart = JSON.parse(itemsInCart);
            }
      }
}

export enum CartActionType {
      FetchAllItemsInCart = "FetchAllItemsInCart",
      AddItemIntoCart = "AddItemIntoCart",
      RemoveItemFromCart = "RemoveItemFromCart",
      Logout = "Logout"
}

export interface CartAction {
      type: CartActionType;
      payload?: any;
}

export function fetchAllItemsInCartAction(phones: CartItemDetailsModel[]): CartAction {
      return { type: CartActionType.FetchAllItemsInCart, payload: phones };
}
export function addItemToCartAction(phone: CartItemDetailsModel): CartAction {
      return { type: CartActionType.AddItemIntoCart, payload: phone };
}
export function removeItemFromCartAction(phone: CartItemDetailsModel): CartAction {
      return { type: CartActionType.RemoveItemFromCart, payload: phone }
}

export function CartReducer(currentCartState: CartState = new CartState(), action: CartAction): CartState {
      const newCartState = { ...currentCartState };

      switch (action.type) {

            case CartActionType.FetchAllItemsInCart:
                  newCartState.itemsInCart = action.payload;
                  localStorage.setItem("itemsInCart", JSON.stringify(newCartState.itemsInCart));
                  break;

            case CartActionType.AddItemIntoCart:
                  if (newCartState.itemsInCart?.find(i => i.phoneId === action.payload.phoneId)) {
                        const newList = newCartState.itemsInCart.filter(i => i.phoneId !== action.payload.phoneId);

                        newList.push(action.payload);
                        newCartState.itemsInCart = newList;
                        localStorage.setItem("itemsInCart", JSON.stringify(newCartState.itemsInCart));
                        break;
                  }
                  newCartState.itemsInCart.push(action.payload);
                  localStorage.setItem("itemsInCart", JSON.stringify(newCartState.itemsInCart));
                  break;

            case CartActionType.RemoveItemFromCart:
                  const newList = newCartState.itemsInCart.filter(i => i.phoneId !== action.payload.phoneId);
                  newCartState.itemsInCart = newList;
                  localStorage.setItem("itemsInCart", JSON.stringify(newCartState.itemsInCart));
                  break;

      }



      return newCartState;
}




