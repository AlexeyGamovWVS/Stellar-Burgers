import {
  TWsActions,
  WS_CLOSE,
  WS_ERROR,
  WS_MESSAGE,
  WS_OPEN,
} from "../actions/wsActionTypes";

import { IOrders } from "../utils/order-types";

interface ISocketState extends IOrders {
  connectingErrorMessage: string | null;
}

const initialState: ISocketState = {
  orders: [],
  total: 0,
  totalToday: 0,
  connectingErrorMessage: "",
};

export const socketMiddlewareReduser = (state = initialState, action: TWsActions) => {
  switch (action.type) {
    case WS_CLOSE:
      return {
        ...state,
        orders: [],
        connectingErrorMessage: null,
      };
    case WS_ERROR:
      return {
        ...state,
        connectingErrorMessage: action.payload,
      };
    case WS_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case WS_OPEN:
      return state;
    default:
      return state;
  }
};
