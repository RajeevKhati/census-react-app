import { call, fork, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  addCensusHouseNumberApi,
  addHouseListingApi,
  addPersonApi,
  getCensusHouseNumberApi,
} from "../../apis/census";
import {
  addHouseListingFailed,
  addHouseListingSucceeded,
  addPersonFailed,
  addPersonSucceeded,
} from "../actions/censusActions";
import {
  ADD_HOUSE_LISTING_REQUESTED,
  ADD_PERSON_REQUESTED,
} from "../actionTypes";

function* onAddHouseListingAsync({ payload }) {
  try {
    const response = yield call(addHouseListingApi, payload);
    yield call(addCensusHouseNumberApi, {
      censusHouseNumber: response.data.id,
    });
    yield put(addHouseListingSucceeded());
    toast.success("House listing added successfully");
    toast.info(`Generated Census House Number = ${response.data.id}`);
  } catch (error) {
    yield put(addHouseListingFailed(error.message));
    toast.error(error.message);
  }
}

function* onAddHouseListing() {
  yield takeLatest(ADD_HOUSE_LISTING_REQUESTED, onAddHouseListingAsync);
}

function* onAddPersonAsync({ payload }) {
  try {
    const { censusHouseNumber } = payload;
    const response = yield call(getCensusHouseNumberApi);
    let found = false;
    for (const chn of response.data) {
      if (chn.censusHouseNumber === Number(censusHouseNumber)) {
        found = true;
        break;
      }
    }
    if (found) {
      yield call(addPersonApi, payload);
      yield put(addPersonSucceeded());
      toast.success("Person added successfully");
    } else {
      const error = "Entered census house number is Invalid";
      yield put(addPersonFailed(error));
      toast.error(error);
    }
  } catch (error) {
    yield put(addPersonFailed(error.message));
    toast.error(error.message);
  }
}

function* onAddPerson() {
  yield takeLatest(ADD_PERSON_REQUESTED, onAddPersonAsync);
}

const censusSaga = [fork(onAddHouseListing), fork(onAddPerson)];

export default censusSaga;
