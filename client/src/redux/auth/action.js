import {
  SIGNUP_FAILURE,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
} from "./actionTypes";

// signup
const signupSuccess = (payload) => {
  return {
    action: SIGNUP_SUCCESS,
    payload: payload,
  };
};

const signupFailure = (err) => {
  return {
    action: SIGNUP_FAILURE,
    payload: err,
  };
};

const signupPending = (payload) => {
  return {
    action: SIGNUP_PENDING,
    payload: payload,
  };
};

// login
const signinSuccess = (token) => {
  return {
    action: SIGNIN_SUCCESS,
    payload: token,
  };
};

const signinFailure = (err) => {
  return {
    action: SIGNIN_FAILURE,
    payload: err,
  };
};

const signinPending = (payload) => {
  return {
    action: SIGNIN_PENDING,
    payload: payload,
  };
};

export {
  signupSuccess,
  signupPending,
  signupFailure,
  signinPending,
  signinFailure,
  signinSuccess,
};
