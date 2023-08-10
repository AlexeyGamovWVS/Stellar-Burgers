import { api } from "../../utils/api";

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

export function getIngredientsData() {
  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST,
    });
    api()
      .then((res) => {
        res.success
          ? dispatch({
              type: GET_ITEMS_SUCCESS,
              items: res.data,
            })
          : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
      })
      .catch((err) => {
        dispatch({
          type: GET_ITEMS_FAILED,
          err,
        });
      });
  };
}
