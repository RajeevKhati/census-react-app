import {
  ADD_HOUSE_LISTING_FAILED,
  ADD_HOUSE_LISTING_REQUESTED,
  ADD_HOUSE_LISTING_SUCCEEDED,
  ADD_PERSON_FAILED,
  ADD_PERSON_REQUESTED,
  ADD_PERSON_SUCCEEDED,
} from "../actionTypes";

export const addHouseListingRequested = (houseDetails) => {
  return {
    type: ADD_HOUSE_LISTING_REQUESTED,
    payload: houseDetails,
  };
};

export const addHouseListingSucceeded = () => {
  return {
    type: ADD_HOUSE_LISTING_SUCCEEDED,
  };
};

export const addHouseListingFailed = (error) => {
  return {
    type: ADD_HOUSE_LISTING_FAILED,
    payload: error,
  };
};

export const addPersonRequested = (personDetails) => {
  return {
    type: ADD_PERSON_REQUESTED,
    payload: personDetails,
  };
};

export const addPersonSucceeded = () => {
  return {
    type: ADD_PERSON_SUCCEEDED,
  };
};

export const addPersonFailed = (error) => {
  return {
    type: ADD_PERSON_FAILED,
    payload: error,
  };
};
