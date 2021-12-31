import {
  EDIT_VOLUNTEER_FAILED,
  EDIT_VOLUNTEER_REQUESTED,
  EDIT_VOLUNTEER_SUCCEEDED,
  FETCH_VOLUNTEERS_FAILED,
  FETCH_VOLUNTEERS_REQUESTED,
  FETCH_VOLUNTEERS_SUCCEEDED,
  REGISTER_VOLUNTEER_FAILED,
  REGISTER_VOLUNTEER_REQUESTED,
  REGISTER_VOLUNTEER_SUCCEEDED,
} from "../actionTypes";

export const registerVolunteerRequested = (volunteerDetails) => {
  return {
    type: REGISTER_VOLUNTEER_REQUESTED,
    payload: volunteerDetails,
  };
};

export const registerVolunteerSucceeded = () => {
  return {
    type: REGISTER_VOLUNTEER_SUCCEEDED,
  };
};

export const registerVolunteerFailed = (error) => {
  return {
    type: REGISTER_VOLUNTEER_FAILED,
    payload: error,
  };
};

export const fetchVolunteersRequested = () => {
  return {
    type: FETCH_VOLUNTEERS_REQUESTED,
  };
};

export const fetchVolunteersSucceeded = (volunteersArray) => {
  return {
    type: FETCH_VOLUNTEERS_SUCCEEDED,
    payload: volunteersArray,
  };
};

export const fetchVolunteersFailed = (error) => {
  return {
    type: FETCH_VOLUNTEERS_FAILED,
    payload: error,
  };
};

export const editVolunteerRequested = (id, volunteerDetails) => {
  return {
    type: EDIT_VOLUNTEER_REQUESTED,
    payload: { id, volunteerDetails },
  };
};

export const editVolunteerSucceeded = (volunteerDetails) => {
  return {
    type: EDIT_VOLUNTEER_SUCCEEDED,
    payload: volunteerDetails,
  };
};

export const editVolunteerFailed = (error) => {
  return {
    type: EDIT_VOLUNTEER_FAILED,
    payload: error,
  };
};
