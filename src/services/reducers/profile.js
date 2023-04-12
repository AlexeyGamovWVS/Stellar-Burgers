import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from "../actions/profile";

const initialState = {
	userInfo: null,
	accessToken: null,
	refreshToken: null,
	isAuthenticated: false,
  forgotPassDetails: null,
  forgotPassRequest: false,
  forgotPassFailed: false,
  forgotPassErrMsg: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPassRequest: true,
        forgotPassErrMsg: "",
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPassRequest: false,
        forgotPassFailed: false,
        forgotPassDetails: action.message,
        forgotPassErrMsg: "",
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPassRequest: false,
        forgotPassFailed: true,
        forgotPassDetails: null,
        forgotPassErrMsg: `Shit happens ${action.err}`,
      };
    }
    default: {
      return state;
    }
  }
};
