import { sendOrder } from "../../components/utils/api";
export const ORDER_ITEMS_REQUEST = "ORDER_ITEMS_REQUEST";
export const ORDER_ITEMS_SUCCESS = "ORDER_ITEMS_SUCCESS";
export const ORDER_ITEMS_FAILED = "ORDER_ITEMS_FAILED";

export function sendOrderData(data) {
  return function (dispatch) {
    dispatch({
      type: ORDER_ITEMS_REQUEST,
    });
    sendOrder(data)
      .then((res) => {
        res
          ? dispatch({
              type: ORDER_ITEMS_SUCCESS,
              orderDetails: res,
            })
          : dispatch({
              type: ORDER_ITEMS_FAILED,
            });
      })
      .catch((err) => {
        dispatch({
          type: ORDER_ITEMS_FAILED,
          err,
        });
      });
  };
}
