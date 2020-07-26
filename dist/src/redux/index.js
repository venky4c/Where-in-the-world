import redux, { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";
import reducers from "./reducers";
//import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);
const store = createStore(
  reducers,
  enhancer
  //composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);

export default store;
