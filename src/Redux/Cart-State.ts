import { PhoneModel } from "Models/Phone-Model";

export class CartState {
      itemsInCart: PhoneModel[] = [];

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

export function fetchAllItemsInCartAction(phones:PhoneModel[]):CartAction {
      return { type: CartActionType.FetchAllItemsInCart,payload:phones };
}
export function addItemToCartAction(phone: PhoneModel): CartAction {
      return { type: CartActionType.AddItemIntoCart, payload: phone };
}

export function CartReducer(currentCartState: CartState = new CartState(), action: CartAction): CartState {
      const newCartState = { ...currentCartState };

      switch (action.type) {
            
            case CartActionType.FetchAllItemsInCart:
                  newCartState.itemsInCart = action.payload;
                  localStorage.setItem("itemsInCart", JSON.stringify(newCartState.itemsInCart));
                  break;
            
            case CartActionType.AddItemIntoCart:
                  newCartState.itemsInCart.push(action.payload);
                  localStorage.setItem("itemsInCart", JSON.stringify(newCartState.itemsInCart));
                  break;


      }



      return newCartState;
}