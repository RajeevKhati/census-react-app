import { all } from "redux-saga/effects";
import volunteerSaga from "./volunteerSaga";
import userSaga from "./userSaga";
import censusSaga from "./censusSaga";

export default function* rootSaga() {
  yield all([...volunteerSaga, ...userSaga, ...censusSaga]);
}
