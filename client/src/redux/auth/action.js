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
    type: SIGNUP_SUCCESS,
    payload: payload,
  };
};

const signupFailure = (err) => {
  return {
    type: SIGNUP_FAILURE,
    payload: err,
  };
};

const signupPending = (payload) => {
  return {
    type: SIGNUP_PENDING,
    payload: payload,
  };
};

// login
const signinSuccess = (token) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: token,
  };
};

const signinFailure = (err) => {
  return {
    type: SIGNIN_FAILURE,
    payload: err,
  };
};

const signinPending = (payload) => {
  return {
    type: SIGNIN_PENDING,
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
