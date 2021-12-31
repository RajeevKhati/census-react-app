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

const initialState = {
  volunteers: [],
  loading: false,
  error: "",
};

const volunteerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_VOLUNTEER_REQUESTED:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case REGISTER_VOLUNTEER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case REGISTER_VOLUNTEER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_VOLUNTEERS_REQUESTED:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_VOLUNTEERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: "",
        volunteers: action.payload,
      };
    case FETCH_VOLUNTEERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case EDIT_VOLUNTEER_REQUESTED:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case EDIT_VOLUNTEER_SUCCEEDED:
      const updatedVolunteers = state.volunteers.map((volunteer) => {
        if (volunteer.id === action.payload.id) {
          return { ...volunteer, request: action.payload.request };
        } else {
          return volunteer;
        }
      });
      return {
        loading: false,
        volunteers: updatedVolunteers,
        error: "",
      };
    case EDIT_VOLUNTEER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default volunteerReducer;
