import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGOUT_USER_FAILED,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SET_AUTH_CHECKED,
  SET_USER_FAIL,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
} from "../actions/profile";

const initialState = {
  userInfo: null,
  isAuthChecked: false,
  isLoading: false,
  success: false,
  failed: false,
  message: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        success: false,
        failed: false,
        message: null,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
        failed: false,
        message: action.payload,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        isLoading: false,
        success: false,
        failed: true,
        message: action.payload,
      };
    }
    case SET_AUTH_CHECKED: {
      return {
        ...state,
        isAuthChecked: action.payload,
      };
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        success: false,
        failed: false,
        message: null,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
        failed: false,
        message: action.payload,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        isLoading: false,
        success: false,
        failed: true,
        message: action.payload,
      };
    }
    case SET_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        success: false,
        failed: false,
        message: null,
      };
    }
    case SET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
        failed: false,
        message: null,
        userInfo: action.user,
      };
    }
    case SET_USER_FAIL: {
      return {
        ...state,
        isLoading: false,
        success: false,
        failed: true,
        message: action.payload,
        userInfo: null,
      };
    }
    case LOGOUT_USER_FAILED: {
      return {
        ...state,
        isLoading: false,
        success: false,
        failed: true,
        message: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
