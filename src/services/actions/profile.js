import { sendEmail, sendRegisterData } from "../../utils/api";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

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

export function registerUser(email, name, password) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });
    sendRegisterData(email, name, password)
      .then((res) => {
        res.success
          ? dispatch({
              type: REGISTER_USER_SUCCESS,
              user: res.user,
              accessToken: res.accessToken,
              refreshToken: res.refreshToken,
            })
          : Promise.reject(`Ошибка обработки данных: ${res.status}`);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_USER_FAILED,
          err,
        });
      });
  };
}
