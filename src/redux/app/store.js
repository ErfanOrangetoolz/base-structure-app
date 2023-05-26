import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import apiSlice from "./apiSlice";
import localPersonalizedApiSlice from "./features/common/personalizedTag/localPersonalizedApiSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      sagaMiddleware,
      apiSlice.middleware,
      localPersonalizedApiSlice.middleware
    ),
});

sagaMiddleware.run(rootSaga);

export default store;
