import {
  SIGNUP_FAILURE,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
} from "./actionTypes";
import initialState from "./authInitialState";

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_FAILURE:
      return {
        ...state,
      };
    case SIGNUP_PENDING:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: payload,
      };
    case SIGNIN_PENDING:
      return {
        ...state,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    default:
      return state;
  }
};

export { authReducer };
