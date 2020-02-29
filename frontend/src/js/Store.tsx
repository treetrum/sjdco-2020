import { createStore, applyMiddleware } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer, { RootState } from "./reducers/index";

const SHOW_LOGGER = false;

const middleware = [thunk];

if (SHOW_LOGGER && process.env.NODE_ENV !== "production") {
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
