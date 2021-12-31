import {
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUESTED,
  LOGIN_USER_SUCCEEDED_ADMIN,
  LOGIN_USER_SUCCEEDED_VOLUNTEER,
  LOGOUT_USER,
} from "../actionTypes";

export const userLoginRequested = (creds) => {
  return {
    type: LOGIN_USER_REQUESTED,
    payload: creds,
  };
};

export const userLoginSucceededVolunteer = (userData) => {
  return {
    type: LOGIN_USER_SUCCEEDED_VOLUNTEER,
    payload: userData,
  };
};

export const userLoginSucceededAdmin = (userData) => {
  return {
    type: LOGIN_USER_SUCCEEDED_ADMIN,
    payload: userData,
  };
};

export const userLoginFailed = (error) => {
  return {
    type: LOGIN_USER_FAILED,
    payload: error,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT_USER,
  };
};
