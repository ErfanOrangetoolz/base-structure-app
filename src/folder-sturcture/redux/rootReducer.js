import { combineReducers } from "@reduxjs/toolkit";

import apiSlice from "./apiSlice";
import dialerListSlice from "./features/dialerList/dialerListSlice";
import connectingSlice from "./features/call/connecting/connectingSlice";
import connectedSlice from "./features/call/connected/connectedSlice";
import dialerContactsSlice from "./features/dialerContacts/dialerContactsSlice";
import callSettingSlice from "./features/listSetting/callSetting/callSettingSlice";
import triggerSettingSlice from "./features/listSetting/triggerSetting/triggerSettingSlice";
import scriptSettingSlice from "./features/listSetting/scriptSetting/scriptSettingSlice";
import dialerAnalyticsSlice from "./features/dialerAnalytics/dialerAnalyticsSlice";
import tagSlice from "./features/common/tag/tagSlice";
import initializeSlice from "./features/call/initialize/initializeSlice";
import PersonalizedTagSlice from "./features/common/personalizedTag/PersonalizedTagSlice";
import contactsSlice from "./features/contacts/contactsSlice";
import contactTagsSlice from "./features/call/contactTags/contactTagsSlice";
import contactNoteSlice from "./features/call/contactNote/contactNoteSlice";
import sendSlice from "./features/call/send/sendSlice";
import dialerSlice from "./features/dialer/dialerSlice";
import localPersonalizedApiSlice from "./features/common/personalizedTag/localPersonalizedApiSlice";
import listSettingModalSlice from "./features/listSetting/listSettingModal/listSettingModalSlice";
import defaultCallSettingSlice from "./features/listDefaultSetting/defaultCallSetting/defaultCallSettingSlice";

const combinedReducer = combineReducers({
  // Add the generated reducer as a specific top-level api slice
  [apiSlice.reducerPath]: apiSlice.reducer,
  [localPersonalizedApiSlice.reducerPath]: localPersonalizedApiSlice.reducer,
  dialerList: dialerListSlice,
  dialerContacts: dialerContactsSlice,
  callConnecting: connectingSlice,
  callConnected: connectedSlice,
  callInitialize: initializeSlice,
  callSetting: callSettingSlice,
  triggerSetting: triggerSettingSlice,
  scriptSetting: scriptSettingSlice,
  dialerAnalytics: dialerAnalyticsSlice,
  tag: tagSlice,
  personalizedTag: PersonalizedTagSlice,
  contacts: contactsSlice,
  contactTags: contactTagsSlice,
  contactNote: contactNoteSlice,
  send: sendSlice,
  dialer: dialerSlice,
  listSettingModal: listSettingModalSlice,
  defaultCallSetting: defaultCallSettingSlice,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
