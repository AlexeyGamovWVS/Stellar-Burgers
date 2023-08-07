import {
  WS_CLOSE,
  WS_CONNECT,
  WS_CONNECTING,
  WS_DISCONNECT,
  WS_ERROR,
  WS_MESSAGE,
  WS_OPEN,
} from "../actions/wsActionTypes";
import { WS_STATUS } from "../utils/wsStatus";

const initialState = {
  status: WS_STATUS.offline, //success === true
  orders: [],
  total: 0,
  totalToday: 0,
  connectingErrorMessage: "",
  data: null,
};

export const socketMiddlewareReduser = (state = initialState, action) => {
  switch (action.type) {
    case WS_CLOSE:
      return {
        ...state,
        status: WS_STATUS.offline,
        connectingErrorMessage: "",
      };
    // case WS_CONNECT:
    //   break;
    case WS_CONNECTING:
      return {
        ...state,
        status: WS_STATUS.connecting,
      };
    case WS_DISCONNECT:
      return {
        ...state,
        status: WS_STATUS.offline,
      };
    case WS_ERROR:
      return {
        ...state,
        connectingErrorMessage: action.payload,
      };
    case WS_MESSAGE:
      return {
        ...state,
        data: action.payload,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case WS_OPEN:
      return {
        ...state,
        status: WS_STATUS.online,
        connectingErrorMessage: "",
      };
    default:
      return state;
  }
};
