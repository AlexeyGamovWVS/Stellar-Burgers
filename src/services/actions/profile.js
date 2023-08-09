import {
  sendChangeUserInfoRequest,
  sendEmail,
  sendLogoutRequest,
  sendResetPassRequest,
  sendUserData,
  sendUserInfoRequest,
} from "../../utils/api";
import {cleanTokenCookies, getCookie, setCookie} from "../../utils/cookie";

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
// const ACCESSES_EXPIRED_ERROR = 403;

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

// export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
// export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
// export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

// export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
// export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
// export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

// export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
// export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
// export const REFRESH_TOKEN_FAILED = "REFRESH_TOKEN_FAILED";

// export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
// export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILED = "LOGOUT_USER_FAILED";

// export const GET_USERINFO_REQUEST = "GET_USERINFO_REQUEST";
// export const GET_USERINFO_SUCCESS = "GET_USERINFO_SUCCESS";
// export const GET_USERINFO_FAILED = "GET_USERINFO_FAILED";

// export const CHANGE_USERINFO_REQUEST = "CHANGE_USERINFO_REQUEST";
// export const CHANGE_USERINFO_SUCCESS = "CHANGE_USERINFO_SUCCESS";
// export const CHANGE_USERINFO_FAILED = "CHANGE_USERINFO_FAILED";

// export const REMOVE_FGT_PASS_MSG = "CHANGE_USERINFO_FAILED";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAIL = "SET_USER_FAIL";

// export function sendEmailForgotPassword(email) {
//   return function (dispatch) {
//     dispatch({
//       type: FORGOT_PASSWORD_REQUEST,
//     });
//     sendEmail(email)
//       .then((res) => {
//         res.success
//           ? dispatch({
//               type: FORGOT_PASSWORD_SUCCESS,
//               message: res,
//             })
//           : Promise.reject(`Ошибка обработки данных: ${res.status}`);
//       })
//       .catch((err) => {
//         dispatch({
//           type: FORGOT_PASSWORD_FAILED,
//           err,
//         });
//       });
//   };
// }

// export function loginUser(email, password) {
//   return function (dispatch) {
//     dispatch({
//       type: LOGIN_USER_REQUEST,
//     });
//     sendLoginData(email, password)
//       .then((res) => {
//         if (res.success) {
//           if (res.accessToken) setCookie(ACCESS_TOKEN, res.accessToken);
//           if (res.refreshToken) setCookie(REFRESH_TOKEN, res.refreshToken);
//           dispatch({
//             type: LOGIN_USER_SUCCESS,
//             user: res.user,
//             accessToken: res.accessToken,
//             password: password,
//           });
//           dispatch({
//             type: SET_AUTH_CHECKED,
//             payload: true,
//           });
//         } else {
//           Promise.reject(`Ошибка входа в аккаунт: ${res.status}`);
//         }
//       })
//       .catch((err) => {
//         dispatch({
//           type: LOGIN_USER_FAILED,
//           err,
//         });
//         dispatch({
//           type: SET_AUTH_CHECKED,
//           payload: false,
//         });
//       });
//   };
// }

// export function logoutUser() {
//   return function (dispatch) {
//     dispatch({ type: LOGOUT_USER_REQUEST });
//     sendLogoutRequest()
//       .then((res) =>
//         res.success
//           ? dispatch({
//               type: LOGOUT_USER_SUCCESS,
//               message: res.message,
//             })
//           : Promise.reject(`Ошибка выхода из аккаунта: ${res.status}`)
//       )
//       .catch((err) => {
//         dispatch({
//           type: LOGOUT_USER_FAILED,
//           err,
//         });
//       });
//   };
// }

const promiseReject = (err) => Promise.reject(`Ошибка обработки данных: ${err}`);

const getEmail = (value) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: value,
});

const getEmailError = (value) => ({
  type: FORGOT_PASSWORD_FAILED,
  payload: value,
});

const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

const setUser = (value) => ({
  type: SET_USER_SUCCESS,
  user: value,
});

const setUserFail = (value) => ({
  type: SET_USER_FAIL,
  payload: value,
});

const logoutError = (value) => ({
  type: LOGOUT_USER_FAILED,
  payload: value,
});

const changePass = (value) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: value,
});

const changePassFail = (value) => ({
  type: RESET_PASSWORD_FAILED,
  payload: value,
});

export function sendEmailForgotPassword(email) {
  return function (dispatch) {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    sendEmail(email)
      .then((res) => {
        res.success ? dispatch(getEmail(res)) : promiseReject(res.status);
      })
      .catch((err) => {
        dispatch(getEmailError(err));
        console.error(err);
      });
  };
}

export function loginUser({ email, name, password, endpoint }) {
  return function (dispatch) {
    dispatch({ type: SET_USER_REQUEST });
    sendUserData({ email, name, password, endpoint })
      .then((res) => {
        if (res.success) {
          setCookie(ACCESS_TOKEN, res.accessToken);
          setCookie(REFRESH_TOKEN, res.refreshToken);
          dispatch(setUser(res.user));
          dispatch(setAuthChecked(true));
        } else promiseReject(res.status);
      })
      .catch((err) => {
        cleanTokenCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
        dispatch(setUserFail(err));
        console.error(err);
      });
  };
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: SET_USER_REQUEST });
    sendLogoutRequest()
      .then((res) => {
        if (res.success) {
          cleanTokenCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
          dispatch(setUser(null));
        } else promiseReject(res.status);
      })
      .catch((err) => {
        dispatch(logoutError(err));
        console.error(err);
      });
  };
}

export function getUserInfo() {
  return function (dispatch) {
    dispatch({ type: SET_USER_REQUEST });
    sendUserInfoRequest()
      .then((res) => {
        res.success ? dispatch(setUser(res.user)) : promiseReject(res.status);
      })
      .catch((err) => {
        cleanTokenCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
        dispatch(setUserFail(err));
        console.error(err);
      })
      .finally(() => dispatch(setAuthChecked(true)));
  };
}

export function checkUserAuth() {
  return function (dispatch) {
    if (getCookie(ACCESS_TOKEN)) {
      sendUserInfoRequest()
          .then((res) => {
            res.success ? dispatch(setUser(res.user)) : promiseReject(res.status);
          })
          .catch((err) => {
            cleanTokenCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
            dispatch(setUserFail(err));
          })
          .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  }
}

export function changeUserInfo(name, email, password) {
  return function (dispatch) {
    dispatch({ type: SET_USER_REQUEST });
    sendChangeUserInfoRequest(name, email, password)
      .then((res) => {
        res.success ? dispatch(setUser(res.user)) : promiseReject(res.status);
      })
      .catch((err) => {
        dispatch(setUserFail(err));
        console.error(err);
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
        res.success ? dispatch(changePass(res.message)) : promiseReject(res.status);
      })
      .catch((err) => {
        dispatch(changePassFail(err));
        console.error(err);
      });
  };
}
