// Interfaces
import { State } from '../../interfaces';

// Services
import { setCartItemsToLocalStorage } from '../../services';

// Action Types
import { ADD_MATTRESS, REMOVE_MATTRESS } from '../actionTypes';

export const CartReducer = (state: State, action: any) => {
  switch (action.type) {
    case ADD_MATTRESS:
      if (!state.cartItems.find(item => item.name === action.payload.name)) {
        state.cartItems.push({
          ...action.payload,
        });
        state.itemsCount++;
        setCartItemsToLocalStorage(state.cartItems);
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      } as State;
    case REMOVE_MATTRESS:
      return {
        ...state,
        cartItems: [...state.cartItems.filter(item => item.name !== action.payload.name)],
      } as State;
    default:
      return state as State;
  };
}
