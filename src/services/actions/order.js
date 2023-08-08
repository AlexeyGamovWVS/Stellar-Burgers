import { getOrderData, sendOrder } from "../../utils/api";
export const ORDER_ITEMS_REQUEST = "ORDER_ITEMS_REQUEST";
export const ORDER_ITEMS_SUCCESS = "ORDER_ITEMS_SUCCESS";
export const ORDER_ITEMS_FAILED = "ORDER_ITEMS_FAILED";
export const ORDER_ITEMS_RESET = "ORDER_ITEMS_RESET";

export const FETCH_ORDER_REQUEST = "FETCH_ORDER_REQUEST";
export const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
export const FETCH_ORDER_ERROR = "FETCH_ORDER_ERROR";

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
          : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
      })
      .catch((err) => {
        dispatch({
          type: ORDER_ITEMS_FAILED,
          err,
        });
      });
  };
}

export function getUniqOrderData(number) {
  return function (dispatch) {
    dispatch({
      type: FETCH_ORDER_REQUEST,
    });
    getOrderData(number)
      .then((res) => {
        res.success
          ? dispatch({ type: FETCH_ORDER_SUCCESS, payload: res.orders[0] })
          : Promise.reject(`Ошибка подключения к серверу: ${res.status}`);
      })
      .catch((err) => {
        dispatch({ type: FETCH_ORDER_ERROR, payload: err });
      });
  };
}
