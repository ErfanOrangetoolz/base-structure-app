import { all, put } from "redux-saga/effects";
import { call, takeEvery } from "@redux-saga/core/effects";
import { sliceName } from "../../../app/SliceName";
import adminLoginService from "../service/adminLoginService";
import { handleLoginFailuer, handleLoginSuccess } from "../slice/adminSlice";

function* watchers() {
  yield takeEvery(`${sliceName.admin_login}/handleLogin`, handleLoginSaga);
}

function* handleLoginSaga(action) {
  try {
    const response = yield call(adminLoginService.handleLoginApi, action.payload);
    if (response) {
      yield put(handleLoginSuccess(response));
    } else {
      yield put(handleLoginFailuer(response));
    }
  } catch (err) {
		/* will price common error from constant */
		/* will print logger */
		/* will call common error log function */
    yield put(handleLoginFailuer("server error"));
  }
}

export default function* adminLoginSaga() {
  yield all([watchers()]);
}
