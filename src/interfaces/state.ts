import { Mattresses, Mattress } from "./mattress";

export interface State {
  mattresses: Mattresses;
  cartItems: Mattress[];
  itemsCount: number;
};
