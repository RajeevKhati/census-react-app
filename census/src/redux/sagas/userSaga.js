import { call, fork, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { getAdminsApi } from "../../apis/admins";
import { getVolunteersApi } from "../../apis/volunteers";
import {
  userLoginFailed,
  userLoginSucceededAdmin,
  userLoginSucceededVolunteer,
} from "../actions/userActions";
import { LOGIN_USER_REQUESTED } from "../actionTypes";

function* onUserLoginAsync({ payload }) {
  try {
    const response = yield call(getVolunteersApi);
    const allVolunteers = response.data;
    for (const volunteer of allVolunteers) {
      if (
        volunteer.email === payload.email &&
        volunteer.password === payload.password
      ) {
        yield put(userLoginSucceededVolunteer(volunteer));
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: payload.email,
            password: payload.password,
            type: "volunteer",
            request: volunteer.request,
          })
        );
        toast.success("Login successful");
        return;
      }
    }
    const res = yield call(getAdminsApi);
    const allAdmins = res.data;
    for (const admin of allAdmins) {
      if (
        admin.email === payload.email &&
        admin.password === payload.password
      ) {
        yield put(userLoginSucceededAdmin(payload));
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: payload.email,
            password: payload.password,
            type: "admin",
          })
        );
        toast.success("Login successful, Welcome Admin!!");
        return;
      }
    }

    yield put(userLoginFailed("Invalid Credentials"));
    toast.error("Invalid credentials");
  } catch (error) {
    yield put(userLoginFailed(error.message));
    toast.error(error.message);
  }
}

function* onUserLogin() {
  yield takeLatest(LOGIN_USER_REQUESTED, onUserLoginAsync);
}

const userSaga = [fork(onUserLogin)];

export default userSaga;
