import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import logger from 'redux-logger'
import { customLogger } from "./customMiddleware";

const sagaMiddleware = createSagaMiddleware();

const configStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      customLogger,
      logger,
      sagaMiddleware,
    ),
});

sagaMiddleware.run(rootSaga);

export default configStore;
