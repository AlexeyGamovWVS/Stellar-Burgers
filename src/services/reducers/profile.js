import {
  CHANGE_USERINFO_FAILED,
  CHANGE_USERINFO_REQUEST,
  CHANGE_USERINFO_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_USERINFO_FAILED,
  GET_USERINFO_REQUEST,
  GET_USERINFO_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "../actions/profile";

const initialState = {
  userInfo: null,
  userInfoRequest: false,
  userInfoSuccess: false,
  userInfoFail: false,
  userInfoError: null,
  changeUserInfoRequest: false,
  changeUserInfoSuccess: false,
  changeUserInfoFail: false,
  changeUserInfoError: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  forgotPassMessage: null,
  forgotPassRequest: false,
  forgotPassSuccess: false,
  forgotPassFailed: false,
  registrRequest: false,
  registrSuccess: false,
  registrFail: false,
  loginRequest: false,
  loginSucces: false,
  loginFail: false,
  logoutRequest: false,
  logoutSucces: false,
  logoutFail: false,
  logoutMsg: null,
  resetPassRequest: false,
  resetPassSuccess: false,
  resetPassFail: false,
  resetPassMessage: null,
  refreshTokenRequest: false,
  refreshTokenSuccess: false,
  refreshTokenFail: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenSuccess: false,
        refreshTokenFail: false,
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenSuccess: true,
        refreshTokenFail: false,
      };
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenSuccess: false,
        refreshTokenFail: true,
      };
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPassRequest: true,
        forgotPassFailed: false,
        forgotPassSuccess: false,
        forgotPassMessage: null,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPassRequest: false,
        forgotPassFailed: false,
        forgotPassSuccess: true,
        forgotPassMessage: action.message,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPassRequest: false,
        forgotPassFailed: true,
        forgotPassSuccess: false,
        forgotPassMessage: `Не удалось изменить пароль: ${action.err}`,
      };
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPassMessage: null,
        resetPassSuccess: false,
        resetPassRequest: true,
        resetPassFail: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPassMessage: action.message,
        resetPassSuccess: true,
        resetPassRequest: false,
        resetPassFail: false,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPassMessage: `Не удалось изменить пароль: ${action.err}`,
        resetPassSuccess: false,
        resetPassRequest: false,
        resetPassFail: true,
      };
    }
    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        registrRequest: true,
        registrSuccess: false,
        registrFail: false,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        registrRequest: false,
        registrSuccess: true,
        registrFail: false,
        userInfo: { ...action.user, password: action.password },
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    }
    case REGISTER_USER_FAILED: {
      return {
        ...state,
        registrRequest: false,
        registrSuccess: false,
        registrFail: true,
      };
    }
    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginSuccess: false,
        loginFail: false,
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginSuccess: true,
        loginFail: false,
        userInfo: { ...action.user, password: action.password },
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    }
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginSuccess: false,
        loginFail: true,
        logoutMsg: action.err,
      };
    }
    case LOGOUT_USER_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutSuccess: false,
        logoutFail: false,
        logoutMsg: null,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        logoutSuccess: true,
        logoutFail: false,
        logoutMsg: action.message,
        userInfo: null,
        accessToken: null,
        refreshToken: null,
      };
    }
    case LOGOUT_USER_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutSuccess: false,
        logoutFail: true,
        logoutMsg: action.err,
      };
    }
    case GET_USERINFO_REQUEST: {
      return {
        ...state,
        userInfoRequest: true,
        userInfoSuccess: false,
        userInfoFail: false,
      };
    }
    case GET_USERINFO_SUCCESS: {
      return {
        ...state,
        userInfoRequest: false,
        userInfoSuccess: true,
        userInfoFail: false,
        userInfo: {
          ...state.userInfo,
          name: action.userInfo.name,
          email: action.userInfo.email,
        },
      };
    }
    case GET_USERINFO_FAILED: {
      return {
        ...state,
        userInfoRequest: false,
        userInfoSuccess: false,
        userInfoFail: true,
        userInfoError: action.err,
        userInfo: null,
      };
    }
    case CHANGE_USERINFO_REQUEST: {
      return {
        ...state,
        changeUserInfoRequest: true,
        changeUserInfoSuccess: false,
        changeUserInfoFail: false,
      };
    }
    case CHANGE_USERINFO_SUCCESS: {
      return {
        ...state,
        changeUserInfoRequest: false,
        changeUserInfoSuccess: true,
        changeUserInfoFail: false,
        userInfo: {
          ...state.userInfo,
          name: action.userInfo.name,
          email: action.userInfo.email,
          password: action.password,
        },
      };
    }
    case CHANGE_USERINFO_FAILED: {
      return {
        ...state,
        changeUserInfoRequest: false,
        changeUserInfoSuccess: false,
        changeUserInfoFail: true,
        changeUserInfoError: action.err,
      };
    }
    default: {
      return state;
    }
  }
};
