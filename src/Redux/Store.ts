import { createStore } from "redux";
import { authReducer } from "./AuthState";
import { CartReducer } from "./Cart-State";

export const cartStore = createStore(CartReducer);
export const authStore = createStore(authReducer);