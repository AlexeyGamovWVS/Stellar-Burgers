import {
  TWsPersonalActions,
  WS_PERSONAL_CLOSE,
  WS_PERSONAL_ERROR,
  WS_PERSONAL_MESSAGE,
  WS_PERSONAL_OPEN,
} from "../actions/wsActionTypes";
import { IOrders } from "../utils/order-types";

type TPersonalSocketState = Omit<IOrders, "total" | "totalToday"> & {
  connectingErrorMessage: string | null;
};

const initialState: TPersonalSocketState = {
  orders: [],
  connectingErrorMessage: "",
};

export const socketPersonalMiddlewareReduser = (
  state = initialState,
  action: TWsPersonalActions
) => {
  switch (action.type) {
    case WS_PERSONAL_CLOSE:
      return {
        ...state,
        orders: [],
        connectingErrorMessage: null,
      };
    case WS_PERSONAL_ERROR:
      return {
        ...state,
        connectingErrorMessage: action.payload,
      };
    case WS_PERSONAL_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
      };
    case WS_PERSONAL_OPEN:
      return state;
    default:
      return state;
  }
};
