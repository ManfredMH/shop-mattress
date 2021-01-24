import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
} from 'react';

// Reducers
import { CartReducer } from './reducers';

// Action Types
import { ADD_MATTRESS, REMOVE_MATTRESS } from './actionTypes';

// Interfaces
import { State, Mattresses, Mattress } from '../interfaces';

// Data
import data from '../data/mattress.json';

// Services
import { getCartItemsFromLocalStorage } from '../services';

export const Context = createContext<any>({});
export const useStateContext = () => useContext(Context);

const mattresses = data.mattresses as Mattresses;
const cartItems = getCartItemsFromLocalStorage();
const initialState: State = { mattresses, cartItems, itemsCount: cartItems.length };

export const ContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Actions
  const addMattress = (payload: Mattress) => {
    dispatch({ type: ADD_MATTRESS, payload });
  }

  const removeMattress = (payload: Mattress) => {
    dispatch({ type: REMOVE_MATTRESS, payload });
  }

  const contextValues = {
    ...state,
    addMattress,
    removeMattress,
  };

  return <Context.Provider value={contextValues}>{ children }</Context.Provider>;
}
