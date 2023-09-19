import { AppDispatch, AppThunk } from "../..";
import {
  sendChangeUserInfoRequest,
  sendEmail,
  sendLogoutRequest,
  sendResetPassRequest,
  sendUserData,
  sendUserInfoRequest,
} from "../../utils/api";
import { cleanTokenCookies, getCookie, setCookie } from "../../utils/cookie";
import type { IUserFull } from "../utils/types";
const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED: "FORGOT_PASSWORD_FAILED" = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST" = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED: "RESET_PASSWORD_FAILED" = "RESET_PASSWORD_FAILED";

export const LOGOUT_USER_FAILED: "LOGOUT_USER_FAILED" = "LOGOUT_USER_FAILED";

export const SET_AUTH_CHECKED: "SET_AUTH_CHECKED" = "SET_AUTH_CHECKED";
export const SET_USER_REQUEST: "SET_USER_REQUEST" = "SET_USER_REQUEST";
export const SET_USER_SUCCESS: "SET_USER_SUCCESS" = "SET_USER_SUCCESS";
export const SET_USER_FAIL: "SET_USER_FAIL" = "SET_USER_FAIL";
export interface ISetUserReqAction {
  type: typeof SET_USER_REQUEST;
}
export interface ISetUserSuccessAction {
  type: typeof SET_USER_SUCCESS;
  payload: any;
}
export interface ISetUserFailedAction {
  type: typeof SET_USER_FAIL;
  payload: any;
}

export interface IResetPasswReqAction {
  type: typeof RESET_PASSWORD_REQUEST;
}
export interface IResetPasswSuccessAction {
  type: typeof RESET_PASSWORD_SUCCESS;
  payload: any;
}
export interface IResetPasswFailedAction {
  type: typeof RESET_PASSWORD_FAILED;
  payload: any;
}

export interface IForgotPasswReqAction {
  type: typeof FORGOT_PASSWORD_REQUEST;
}
export interface IForgotPasswSuccessAction {
  type: typeof FORGOT_PASSWORD_SUCCESS;
  payload: string;
}
export interface IForgotPasswFailedAction {
  type: typeof FORGOT_PASSWORD_FAILED;
  payload: string;
}

export interface ISetAuthCheckedAction {
  type: typeof SET_AUTH_CHECKED;
  payload: boolean;
}
export interface ISetLogoutFailedAction {
  type: typeof LOGOUT_USER_FAILED;
  payload: any;
}

export type TUserActions =
  | ISetUserReqAction
  | ISetUserSuccessAction
  | ISetUserFailedAction
  | IResetPasswReqAction
  | IResetPasswSuccessAction
  | IResetPasswFailedAction
  | IForgotPasswReqAction
  | IForgotPasswSuccessAction
  | IForgotPasswFailedAction
  | ISetAuthCheckedAction
  | ISetLogoutFailedAction;

interface PromiseReject {
  (err: string): Promise<string>;
}

const promiseReject: PromiseReject = (err) => Promise.reject(`Ошибка обработки данных: ${err}`);

const getEmailReq = (): IForgotPasswReqAction => ({
  type: FORGOT_PASSWORD_REQUEST,
});

const getEmail = (value: string): IForgotPasswSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: value,
});

const getEmailError = (value: string): IForgotPasswFailedAction => ({
  type: FORGOT_PASSWORD_FAILED,
  payload: value,
});

const setAuthChecked = (value: boolean): ISetAuthCheckedAction => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

const setUserReq = (): ISetUserReqAction => ({
  type: SET_USER_REQUEST,
});

const setUser = (value: any): ISetUserSuccessAction => ({
  type: SET_USER_SUCCESS,
  payload: value,
});

const setUserFail = (value: any): ISetUserFailedAction => ({
  type: SET_USER_FAIL,
  payload: value,
});

const logoutError = (value: any): ISetLogoutFailedAction => ({
  type: LOGOUT_USER_FAILED,
  payload: value,
});

const changePassReq = (): IResetPasswReqAction => ({
  type: RESET_PASSWORD_REQUEST,
});

const changePass = (value: any): IResetPasswSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: value,
});

const changePassFail = (value: any): IResetPasswFailedAction => ({
  type: RESET_PASSWORD_FAILED,
  payload: value,
});

export const sendEmailForgotPassword: AppThunk = (email: string) => (dispatch: AppDispatch) => {
  dispatch(getEmailReq());
  sendEmail(email)
    .then((res) => {
      res.success ? dispatch(getEmail(res)) : promiseReject(res.status);
    })
    .catch((err) => {
      dispatch(getEmailError(err));
      console.error(err);
    });
};

export const loginUser: AppThunk =
  ({ email, name, password, endpoint }: IUserFull) =>
  (dispatch: AppDispatch) => {
    dispatch(setUserReq());
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

export const logoutUser: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(setUserReq());
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

export const checkUserAuth: AppThunk = () => (dispatch: AppDispatch) => {
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
};

export const changeUserInfo: AppThunk =
  (name: string, email: string, password: string) => (dispatch: AppDispatch) => {
    dispatch(setUserReq());
    sendChangeUserInfoRequest(name, email, password)
      .then((res) => {
        res.success ? dispatch(setUser(res.user)) : promiseReject(res.status);
      })
      .catch((err) => {
        dispatch(setUserFail(err));
        console.error(err);
      });
  };

export const resetPassword: AppThunk =
  (password: string, code: string) => (dispatch: AppDispatch) => {
    dispatch(changePassReq());
    sendResetPassRequest(password, code)
      .then((res) => {
        res.success ? dispatch(changePass(res.message)) : promiseReject(res.status);
      })
      .catch((err) => {
        dispatch(changePassFail(err));
        console.error(err);
      });
  };

// export const getCountriesThunk: AppThunk = () => (dispatch: AppDispatch) => {
//   dispatch(getCountriesAction());
//   getCountriesRequest().then(res => {
//     if (res && res.success) {
//       dispatch(getCountriesSuccessAction(res.countries));
//     } else {
//       dispatch(getCountriesFailedAction());
//     }
//   });
// };
