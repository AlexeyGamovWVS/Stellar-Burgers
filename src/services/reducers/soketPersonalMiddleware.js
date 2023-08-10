import {
  WS_PERSONAL_CLOSE,
  WS_PERSONAL_CONNECTING,
  WS_PERSONAL_DISCONNECT,
  WS_PERSONAL_ERROR,
  WS_PERSONAL_MESSAGE,
  WS_PERSONAL_OPEN,
} from "../actions/wsActionTypes";
import { WS_STATUS } from "../utils/wsStatus";

const initialState = {
  status: WS_STATUS.offline, //success === true
  orders: [],
  connectingErrorMessage: "",
};

export const socketPersonalMiddlewareReduser = (state = initialState, action) => {
  switch (action.type) {
    case WS_PERSONAL_CLOSE:
      return {
        ...state,
        status: WS_STATUS.offline,
        connectingErrorMessage: "",
      };
    case WS_PERSONAL_CONNECTING:
      return {
        ...state,
        status: WS_STATUS.connecting,
      };
    case WS_PERSONAL_DISCONNECT:
      return {
        ...state,
        status: WS_STATUS.offline,
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
      return {
        ...state,
        status: WS_STATUS.online,
        connectingErrorMessage: "",
      };
    default:
      return state;
  }
};
