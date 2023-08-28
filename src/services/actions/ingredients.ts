import { api } from "../../utils/api";

export const GET_ITEMS_REQUEST: "GET_ITEMS_REQUEST" = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS" = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED: "GET_ITEMS_FAILED" = "GET_ITEMS_FAILED";

export interface IItemsReqAction {
  type: typeof GET_ITEMS_REQUEST;
}

export interface IItemsSuccessAction {
  type: typeof GET_ITEMS_SUCCESS;
  items: Array<any>;
}

export interface IItemsFailedAction {
  type: typeof GET_ITEMS_REQUEST;
  err: string;
}

export type TItems = IItemsReqAction | IItemsSuccessAction | IItemsFailedAction;

export const itemsReqAction = (): IItemsReqAction => ({
  type: GET_ITEMS_REQUEST,
});

export const itemsSuccessAction = (items: Array<any>): IItemsSuccessAction => ({
  type: GET_ITEMS_SUCCESS,
  items,
});

export const itemsFailedAction = (err: string): IItemsFailedAction => ({
  type: GET_ITEMS_REQUEST,
  err,
});

export function getIngredientsData() {
  return function (dispatch: any) {
    dispatch(itemsReqAction());
    api()
      .then((res) => {
        res.success
          ? dispatch(itemsSuccessAction(res.data))
          : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
      })
      .catch((err) => {
        dispatch(itemsFailedAction(err));
      });
  };
}
