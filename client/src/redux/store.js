import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

//middleWare
const customMiddleWare = (store) => (next) => (action) => {
  return typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(customMiddleWare));

// this is our store
export const store = createStore(rootReducer, enhancer);
