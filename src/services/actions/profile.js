import {
  sendChangeUserInfoRequest,
  sendEmail,
  sendLoginData,
  sendLogoutRequest,
  // sendRefreshToken,
  sendRegisterData,
  sendResetPassRequest,
  sendUserInfoRequest,
} from "../../utils/api";
import { getCookie, setCookie } from "../../utils/cookie";

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
// const ACCESSES_EXPIRED_ERROR = 403;

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

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILED = "REFRESH_TOKEN_FAILED";

export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILED = "LOGOUT_USER_FAILED";

export const GET_USERINFO_REQUEST = "GET_USERINFO_REQUEST";
export const GET_USERINFO_SUCCESS = "GET_USERINFO_SUCCESS";
export const GET_USERINFO_FAILED = "GET_USERINFO_FAILED";

export const CHANGE_USERINFO_REQUEST = "CHANGE_USERINFO_REQUEST";
export const CHANGE_USERINFO_SUCCESS = "CHANGE_USERINFO_SUCCESS";
export const CHANGE_USERINFO_FAILED = "CHANGE_USERINFO_FAILED";

export const REMOVE_FGT_PASS_MSG = "CHANGE_USERINFO_FAILED";

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
        if (res.success) {
          if (res.accessToken) setCookie(ACCESS_TOKEN, res.accessToken);
          if (res.refreshToken) setCookie(REFRESH_TOKEN, res.refreshToken);
          dispatch({
            type: REGISTER_USER_SUCCESS,
            user: res.user,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
            password: password,
          });
        } else Promise.reject(`Ошибка обработки данных: ${res.status}`);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_USER_FAILED,
          err,
        });
      });
  };
}

export function loginUser(email, password) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    sendLoginData(email, password)
      .then((res) => {
        if (res.success) {
          if (res.accessToken) setCookie(ACCESS_TOKEN, res.accessToken);
          if (res.refreshToken) setCookie(REFRESH_TOKEN, res.refreshToken);
          console.log(res.accessToken);
          dispatch({
            type: LOGIN_USER_SUCCESS,
            user: res.user,
            accessToken: res.accessToken,
            password: password,
          });
        } else {
          Promise.reject(`Ошибка входа в аккаунт: ${res.status}`);
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_USER_FAILED,
          err,
        });
      });
  };
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: LOGOUT_USER_REQUEST });
    sendLogoutRequest()
      .then((res) =>
        res.success
          ? dispatch({
              type: LOGOUT_USER_SUCCESS,
              message: res.message,
            })
          : Promise.reject(`Ошибка выхода из аккаунта: ${res.status}`)
      )
      .catch((err) => {
        dispatch({
          type: LOGOUT_USER_FAILED,
          err,
        });
      });
  };
}

export function getUserInfo() {
  return function (dispatch) {
    dispatch({ type: GET_USERINFO_REQUEST });
    sendUserInfoRequest()
      .then((res) => {
        res.success
          ? dispatch({
              type: GET_USERINFO_SUCCESS,
              userInfo: res.user,
            })
          : Promise.reject(res.status);
      })
      .catch((err) => {
        dispatch({
          type: GET_USERINFO_FAILED,
          err,
        });
        console.error("TROUBLE" + err);
      });
  };
}

export function changeUserInfo(name, email, password) {
  return function (dispatch) {
    dispatch({ type: CHANGE_USERINFO_REQUEST });
    sendChangeUserInfoRequest(name, email, password)
      .then((res) => {
        res.success
          ? dispatch({
              type: CHANGE_USERINFO_SUCCESS,
              userInfo: res.user,
              password,
            })
          : Promise.reject(res.status);
      })
      .catch((err) => {
        dispatch({
          type: CHANGE_USERINFO_FAILED,
          err,
        });
        console.error("TROUBLE" + err);
      });
  };
}

export function resetPassword(password, code) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    sendResetPassRequest(password, code)
      .then((res) => {
        console.log(res);
        res.succes
          ? dispatch({
              type: RESET_PASSWORD_SUCCESS,
              message: res.message,
              password: password,
            })
          : Promise.reject(`Ошибка при смене пароля или отправки данных на сервер: ${res.status}`);
      })
      .catch((err) =>
        dispatch({
          type: RESET_PASSWORD_FAILED,
          err,
        })
      );
  };
}

// export function refreshToken(key, data) {
//   return function (dispatch) {
//     const token = getCookie(REFRESH_TOKEN);
//     sendRefreshToken(token)
//       .then((res) => {
//         if (res.success) {
//           if (res.accessToken) setCookie(ACCESS_TOKEN, res.accessToken);
//           if (res.refreshToken) setCookie(REFRESH_TOKEN, res.refreshToken);
//           dispatch({
//             type: REFRESH_TOKEN_SUCCESS,
//           });
//           if (key === "getUserInfo") {
//             dispatch(getUserInfo());
//           }
//           if (key === "changeUserInfo") {
//             dispatch(changeUserInfo(data.name, data.email, data.password));
//           }
//         } else {
//           Promise.reject(`Не удалось обновить токен доступа: ${res.status}`);
//         }
//       })
//       .catch((err) => console.log(err));
//   };
// }
