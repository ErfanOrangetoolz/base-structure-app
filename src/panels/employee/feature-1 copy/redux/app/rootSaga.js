import { all } from "redux-saga/effects";
import adminLoginSaga from "../features/admin-login/saga/adminLoginSaga";

export default function* rootSaga() {
  yield all([
    adminLoginSaga(),
  ]);
};
