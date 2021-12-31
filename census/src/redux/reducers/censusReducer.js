import {
  ADD_HOUSE_LISTING_FAILED,
  ADD_HOUSE_LISTING_REQUESTED,
  ADD_HOUSE_LISTING_SUCCEEDED,
  ADD_PERSON_FAILED,
  ADD_PERSON_REQUESTED,
  ADD_PERSON_SUCCEEDED,
} from "../actionTypes";

const initialState = {
  message: "",
  error: "",
  loading: false,
};

const censusReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOUSE_LISTING_REQUESTED:
      return {
        message: "house listing requested",
        error: "",
        loading: true,
      };
    case ADD_HOUSE_LISTING_SUCCEEDED:
      return {
        message: "house listing succeeded",
        error: "",
        loading: false,
      };
    case ADD_HOUSE_LISTING_FAILED:
      return {
        message: "house listing failed",
        error: action.payload,
        loading: false,
      };

    case ADD_PERSON_REQUESTED:
      return {
        message: "Person requested",
        error: "",
        loading: true,
      };
    case ADD_PERSON_SUCCEEDED:
      return {
        message: "Person added successfully",
        error: "",
        loading: false,
      };
    case ADD_PERSON_FAILED:
      return {
        message: "Person added failed",
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default censusReducer;
