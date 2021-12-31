import { call, fork, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  editVolunteerApi,
  getVolunteersApi,
  registerVolunteerApi,
} from "../../apis/volunteers";
import { userLoginRequested } from "../actions/userActions";
import {
  editVolunteerFailed,
  editVolunteerSucceeded,
  fetchVolunteersFailed,
  fetchVolunteersSucceeded,
  registerVolunteerFailed,
  registerVolunteerSucceeded,
} from "../actions/volunteerActions";
import {
  EDIT_VOLUNTEER_REQUESTED,
  FETCH_VOLUNTEERS_REQUESTED,
  REGISTER_VOLUNTEER_REQUESTED,
} from "../actionTypes";

function* onRegisterVolunteerAsync({ payload }) {
  try {
    const res = yield call(getVolunteersApi);
    const allVolunteers = res.data;
    for (const volunteer of allVolunteers) {
      if (volunteer.email === payload.email) {
        yield put(registerVolunteerFailed("Entered email already exists"));
        toast.error("Entered email already exists");
        return;
      }
    }

    payload.request = "pending";
    const response = yield call(registerVolunteerApi, payload);
    if (response.status === 201) {
      yield put(registerVolunteerSucceeded());
      toast.success("Volunteer added successfully");
      yield put(userLoginRequested(payload));
    }
  } catch (error) {
    yield put(registerVolunteerFailed(error.message));
    toast.error(error.message);
  }
}

function* onRegisterVolunteer() {
  yield takeLatest(REGISTER_VOLUNTEER_REQUESTED, onRegisterVolunteerAsync);
}

function* onFetchVolunteersAsync({ payload }) {
  try {
    const response = yield call(getVolunteersApi);
    const allVolunteers = response.data;
    yield put(fetchVolunteersSucceeded(allVolunteers));
  } catch (error) {
    yield put(fetchVolunteersFailed(error.message));
  }
}

function* onFetchVolunteers() {
  yield takeLatest(FETCH_VOLUNTEERS_REQUESTED, onFetchVolunteersAsync);
}

function* onEditVolunteerAsync({ payload }) {
  try {
    const { id, volunteerDetails } = payload;
    const response = yield call(editVolunteerApi, id, volunteerDetails);
    console.log(response.data);
    yield put(editVolunteerSucceeded(response.data));
  } catch (error) {
    yield put(editVolunteerFailed(error.message));
  }
}

function* onEditVolunteer() {
  yield takeLatest(EDIT_VOLUNTEER_REQUESTED, onEditVolunteerAsync);
}

const volunteerSaga = [
  fork(onRegisterVolunteer),
  fork(onFetchVolunteers),
  fork(onEditVolunteer),
];

export default volunteerSaga;
