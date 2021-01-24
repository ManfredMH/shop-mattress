export enum MattressType {
  CLASSIC = 'classic',
  LOOM = 'loom',
  ZEN = 'zen',
};

export interface Mattress {
  name: string;
  price: number;
  reviewRating: number;
  imageFileName: string;
};

export interface Mattresses {
  classic: Mattress;
  loom: Mattress;
  zen: Mattress;
};
