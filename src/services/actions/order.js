import { sendOrder } from "../../utils/api";
export const ORDER_ITEMS_REQUEST = "ORDER_ITEMS_REQUEST";
export const ORDER_ITEMS_SUCCESS = "ORDER_ITEMS_SUCCESS";
export const ORDER_ITEMS_FAILED = "ORDER_ITEMS_FAILED";
export const ORDER_ITEMS_RESET = "ORDER_ITEMS_RESET";

export function sendOrderData(data) {
  return function (dispatch) {
    dispatch({
      type: ORDER_ITEMS_REQUEST,
    });
    sendOrder(data)
      .then((res) => {
        res.success
          ? dispatch({
              type: ORDER_ITEMS_SUCCESS,
              orderDetails: res,
            })
          : Promise.reject(
              `Ошибка загрузки данных с сервера: ${res.status}`
            );
      })
      .catch((err) => {
        dispatch({
          type: ORDER_ITEMS_FAILED,
          err,
        });
      });
  };
}
