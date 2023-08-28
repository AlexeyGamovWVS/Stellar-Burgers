import { getOrderData, sendOrder } from "../../utils/api";
export const ORDER_ITEMS_REQUEST: "ORDER_ITEMS_REQUEST" = "ORDER_ITEMS_REQUEST";
export const ORDER_ITEMS_SUCCESS: "ORDER_ITEMS_SUCCESS" = "ORDER_ITEMS_SUCCESS";
export const ORDER_ITEMS_FAILED: "ORDER_ITEMS_FAILED" = "ORDER_ITEMS_FAILED";
export const ORDER_ITEMS_RESET: "ORDER_ITEMS_RESET" = "ORDER_ITEMS_RESET";

export const FETCH_ORDER_REQUEST: "FETCH_ORDER_REQUEST" = "FETCH_ORDER_REQUEST";
export const FETCH_ORDER_SUCCESS: "FETCH_ORDER_SUCCESS" = "FETCH_ORDER_SUCCESS";
export const FETCH_ORDER_ERROR: "FETCH_ORDER_ERROR" = "FETCH_ORDER_ERROR";

export interface IOrderItemsReqAction {
  readonly type: typeof ORDER_ITEMS_REQUEST;
}

export interface IOrderItemsSuccessAction {
  readonly type: typeof ORDER_ITEMS_SUCCESS;
  readonly orderDetails: any;
}

export interface IOrderItemsFailedAction {
  readonly type: typeof ORDER_ITEMS_FAILED;
  err: string;
}

export interface IOrderItemsResetAction {
  readonly type: typeof ORDER_ITEMS_RESET;
}

export type TOrderActions =
  | IOrderItemsReqAction
  | IOrderItemsSuccessAction
  | IOrderItemsFailedAction
  | IOrderItemsResetAction;

export const orderItemsReqAction = (): IOrderItemsReqAction => ({
  type: ORDER_ITEMS_REQUEST,
});

export const orderItemsSuccessAction = (data: any): IOrderItemsSuccessAction => ({
  type: ORDER_ITEMS_SUCCESS,
  orderDetails: data,
});

export const orderItemsFailedAction = (err: string): IOrderItemsFailedAction => ({
  type: ORDER_ITEMS_FAILED,
  err,
});

export const orderItemsResetAction = (): IOrderItemsResetAction => ({
  type: ORDER_ITEMS_RESET,
});

export interface IOrderFetchReqAction {
  readonly type: typeof FETCH_ORDER_REQUEST;
}

export interface IOrderFetchReqSuccess {
  readonly type: typeof FETCH_ORDER_SUCCESS;
  readonly payload: any;
}

export interface IOrderFetchReqFailed {
  readonly type: typeof FETCH_ORDER_ERROR;
  readonly payload: any;
}

export type TOrderFetchActions =
  | IOrderFetchReqAction
  | IOrderFetchReqSuccess
  | IOrderFetchReqFailed;

export const orderFetchReqAction = (): IOrderFetchReqAction => ({
  type: FETCH_ORDER_REQUEST,
});

export const orderFetchReqSuccess = (payload: any): IOrderFetchReqSuccess => ({
  type: FETCH_ORDER_SUCCESS,
  payload,
});

export const orderFetchReqFailed = (payload: string) => ({
  type: FETCH_ORDER_ERROR,
  payload,
});

export function sendOrderData(data: any) {
  console.log(data);

  return function (dispatch: any) {
    dispatch(orderItemsReqAction());
    sendOrder(data)
      .then((res) => {
        res.success
          ? dispatch(orderItemsSuccessAction(res))
          : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
      })
      .catch((err) => {
        dispatch(orderItemsFailedAction(err));
      });
  };
}

export function getUniqOrderData(number: any) {
  console.log(typeof number);

  return function (dispatch: any) {
    dispatch(orderFetchReqAction());
    getOrderData(number)
      .then((res) => {
        res.success
          ? dispatch(orderFetchReqSuccess(res.orders[0]))
          : Promise.reject(`Ошибка подключения к серверу: ${res.status}`);
      })
      .catch((err) => {
        dispatch(orderFetchReqFailed(err));
      });
  };
}
