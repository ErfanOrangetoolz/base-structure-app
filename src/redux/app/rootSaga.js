import { all } from "redux-saga/effects";
import dialerListSaga from "./features/dialerList/dialerListSaga";
import connectingSaga from "./features/call/connecting/connectingSaga";
import connectedSaga from "./features/call/connected/connectedSaga";
import dialerContactsSaga from "./features/dialerContacts/dialerContactsSaga";
import callSettingSaga from "./features/listSetting/callSetting/callSettingSaga";
import triggerSettingSaga from "./features/listSetting/triggerSetting/triggerSettingSaga";
import scriptSettingSaga from "./features/listSetting/scriptSetting/scriptSettingSaga";
import dialerAnalyticsSaga from "./features/dialerAnalytics/dialerAnalyticsSaga";
import tagSaga from "./features/common/tag/tagSaga";
import intializeSaga from "./features/call/initialize/initializeSaga";
import personalizedTagSaga from "./features/common/personalizedTag/PersonalizedTagSaga";
import contactsSaga from "./features/contacts/contactsSaga";
import contactTagsSaga from "./features/call/contactTags/contactTagsSaga";
import contactNoteSaga from "./features/call/contactNote/contactNoteSaga";
import sendSaga from "./features/call/send/sendSaga";
import dialerSaga from "./features/dialer/dialerSaga";
import defaultCallSettingSaga from "./features/listDefaultSetting/defaultCallSetting/defaultCallSettingSaga";

export default function* rootSaga() {
  yield all([
    dialerListSaga(),
    dialerContactsSaga(),
    connectingSaga(),
    connectedSaga(),
    intializeSaga(),
    callSettingSaga(),
    triggerSettingSaga(),
    scriptSettingSaga(),
    dialerAnalyticsSaga(),
    tagSaga(),
    personalizedTagSaga(),
    contactsSaga(),
    contactTagsSaga(),
    contactNoteSaga(),
    sendSaga(),
    dialerSaga(),
    defaultCallSettingSaga(),
  ]);
}
