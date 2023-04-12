import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
	RESET_PASSWORD_FAILED,
	RESET_PASSWORD_REQUEST,
	RESET_PASSWORD_SUCCESS,
} from "../actions/profile";

const initialState = {
  userInfo: null,
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
  resetPassRequest: false,
  resetPassSuccess: false,
	resetPassFail: false,
  resetPassMessage: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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
			}
		}
		case RESET_PASSWORD_SUCCESS: {
			return {
				...state,
				resetPassMessage: action.message,
				resetPassSuccess: true,
				resetPassRequest: false,
				resetPassFail: false,
			}
		}
		case RESET_PASSWORD_FAILED: {
			return {
				...state,
				resetPassMessage: `Не удалось изменить пароль: ${action.err}`,
				resetPassSuccess: false,
				resetPassRequest: false,
				resetPassFail: true,
			}
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
        userInfo: action.user,
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
        userInfo: action.user,
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
      };
    }
    default: {
      return state;
    }
  }
};
