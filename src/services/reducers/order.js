import {
  ORDER_ITEMS_REQUEST,
  ORDER_ITEMS_SUCCESS,
  ORDER_ITEMS_FAILED,
  ORDER_ITEMS_RESET,
} from "../actions/order";

const initialState = {
  orderDetails: null,
  orderRequest: false,
  orderFailed: false,
  orderErrMsg: "",
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
    default: {
      return state;
    }
  }
};
