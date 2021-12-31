import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  userLoginSucceededAdmin,
  userLoginSucceededVolunteer,
} from "./actions/userActions";
import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  if (user.type === "volunteer") {
    store.dispatch(userLoginSucceededVolunteer(user));
  } else {
    store.dispatch(userLoginSucceededAdmin(user));
  }
}

sagaMiddleware.run(rootSaga);

export default store;
