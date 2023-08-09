import {
  ORDER_ITEMS_REQUEST,
  ORDER_ITEMS_SUCCESS,
  ORDER_ITEMS_FAILED,
  ORDER_ITEMS_RESET,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_ERROR,
} from "../actions/order";

const initialState = {
  orderDetails: null,
  orderRequest: false,
  orderFailed: false,
  orderErrMsg: "",

  currentOrderDetails: null,
  currentOrderRequest: false,
  currentOrderFailed: false,
  currentOrderErrMsg: "",
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_ITEMS_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderErrMsg: "",
      };
    }
    case ORDER_ITEMS_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        orderDetails: action.orderDetails,
        orderErrMsg: "",
      };
    }
    case ORDER_ITEMS_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
        orderErrMsg: `Shit happens ${action.err}`,
      };
    }
    case ORDER_ITEMS_RESET: {
      return {
        ...state,
        orderErrMsg: "",
        orderDetails: null,
      };
    }
    case FETCH_ORDER_REQUEST:
      return {
        ...state,
        currentOrderRequest: true,
        currentOrderErrMsg: "",
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        currentOrderRequest: false,
        currentOrderFailed: false,
        currentOrderDetails: action.payload,
        currentOrderErrMsg: "",
      };
    case FETCH_ORDER_ERROR:
      return {
        ...state,
        currentOrderRequest: false,
        currentOrderFailed: true,
        currentOrderErrMsg: `Shit happens ${action.err}`,
      };
    default: {
      return state;
    }
  }
};
