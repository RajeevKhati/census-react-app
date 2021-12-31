import {
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUESTED,
  LOGIN_USER_SUCCEEDED_ADMIN,
  LOGIN_USER_SUCCEEDED_VOLUNTEER,
  LOGOUT_USER,
} from "../actionTypes";

const initialState = {
  isLoggedIn: false,
  userRole: "",
  user: {},
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCEEDED_VOLUNTEER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
        userRole: "volunteer",
        error: "",
      };
    case LOGIN_USER_SUCCEEDED_ADMIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
        userRole: "admin",
        error: "",
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isLoggedIn: false,
        user: {},
        userRole: "",
      };
    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        error: "",
        isLoggedIn: false,
        user: {},
        userRole: "",
      };
    default:
      return state;
  }
};

export default userReducer;
