import { IIngredient } from "./ingredients-types";
import { IOwner } from "./user-types";

export interface IMyOrder {
  success?: boolean;
  name: string;
  order: {
    createdAt: string;
    updatedAt: string;
    ingredients: IIngredient[];
    name: string;
    number: number;
    owner: IOwner;
    price: number;
    status: string;
    _id: string;
  };
}

export interface IFetchedOrderData {
  createdAt: string;
  updatedAt: string;
  status: string;
  owner: string;
  name: string;
  number: number;
  ingredients: string[];
  _id: string;
  __v: number;
}
export interface IFetchOrderResponse {
  success?: boolean;
  orders: IFetchedOrderData[];
}

export interface IOrders {
  orders: Array<Omit<IFetchedOrderData, "__v" | "owner">>;
  total: number;
  totalToday: number;
}
