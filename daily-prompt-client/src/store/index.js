import rootReducer from "./reducers";
// use compose to combine functions together
// applyMiddleware is useful for any middlewares we want
import { createStore, applyMiddleware, compose } from "redux";
// working with async code in redux
import thunk from "redux-thunk";

export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}
