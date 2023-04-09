import { sendEmail } from "../../utils/api";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export function sendEmailForgotPassword(email) {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    sendEmail(email)
      .then((res) => {
        res.success
          ? dispatch({
              type: FORGOT_PASSWORD_SUCCESS,
              message: res,
            })
          : Promise.reject(`Ошибка обработки данных: ${res.status}`);
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
          err,
        });
      });
  };
}
