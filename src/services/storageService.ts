import { Mattress } from "../interfaces";

export const setCartItemsToLocalStorage = (cartItems: any) => localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));

export const getCartItemsFromLocalStorage = (): Mattress[] => localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
