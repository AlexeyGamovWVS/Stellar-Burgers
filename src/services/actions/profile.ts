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
import { IUserWithPass } from "../utils/user-types";

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
  payload: IUserWithPass | null;
}
export interface ISetUserFailedAction {
  type: typeof SET_USER_FAIL;
  payload: string;
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

const setUser = (value: IUserWithPass | null): ISetUserSuccessAction => ({
  type: SET_USER_SUCCESS,
  payload: value,
});

const setUserFail = (value: string): ISetUserFailedAction => ({
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

export const sendEmailForgotPassword =
  (email: string): AppThunk =>
  (dispatch) => {
    dispatch(getEmailReq());
    sendEmail(email)
      .then((res) => {
        res.success && dispatch(getEmail(res.message));
      })
      .catch((err) => {
        dispatch(getEmailError(err));
        console.error(err);
      });
  };

export const loginUser =
  ({ email, name, password, endpoint }: IUserWithPass & { endpoint: string }): AppThunk =>
  (dispatch) => {
    dispatch(setUserReq());
    sendUserData({ email, name, password, endpoint })
      .then((res) => {
        if (res.success) {
          setCookie(ACCESS_TOKEN, res.accessToken);
          setCookie(REFRESH_TOKEN, res.refreshToken);
          dispatch(setUser(res.user));
          dispatch(setAuthChecked(true));
        }
      })
      .catch((err) => {
        cleanTokenCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
        dispatch(setUserFail(err));
        console.error(err);
      });
  };

export const logoutUser = (): AppThunk => (dispatch) => {
  dispatch(setUserReq());
  sendLogoutRequest()
    .then((res) => {
      if (res.success) {
        cleanTokenCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
        dispatch(setUser(null));
      }
    })
    .catch((err) => {
      dispatch(logoutError(err));
      console.error(err);
    });
};

export const checkUserAuth = (): AppThunk => (dispatch: AppDispatch) => {
  if (getCookie(ACCESS_TOKEN)) {
    sendUserInfoRequest()
      .then((res) => {
        res.success && dispatch(setUser(res.user));
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

export const changeUserInfo =
  (name: string, email: string, password: string): AppThunk =>
  (dispatch) => {
    dispatch(setUserReq());
    sendChangeUserInfoRequest(name, email, password)
      .then((res) => {
        res.success && dispatch(setUser(res.user));
      })
      .catch((err) => {
        dispatch(setUserFail(err));
        console.error(err);
      });
  };

export const resetPassword =
  (password: string, code: string): AppThunk =>
  (dispatch) => {
    dispatch(changePassReq());
    sendResetPassRequest(password, code)
      .then((res) => {
        res.success && dispatch(changePass(res.message));
      })
      .catch((err) => {
        dispatch(changePassFail(err));
        console.error(err);
      });
  };
