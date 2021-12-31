import { combineReducers } from "redux";

import volunteerReducer from "./volunteerReducer";
import userReducer from "./userReducer";
import censusReducer from "./censusReducer";

const rootReducer = combineReducers({
  volunteers: volunteerReducer,
  user: userReducer,
  census: censusReducer,
});

export default rootReducer;
