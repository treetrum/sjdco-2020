import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
