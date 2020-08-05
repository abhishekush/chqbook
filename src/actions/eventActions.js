import { put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { SAVE_EVENT_TRIGGER, SAVE_EVENT, GET_EVENTS_TRIGGER } from "./types";

export const getEventsSelector = (state) => state.events.list;

/* 
  ideally one implements an async functions call here but since this 
  app has no api call we would simply sync data and dispatch the action here
*/
function* saveEventSaga(action) {
  const { payload } = action;
  const events = yield select(getEventsSelector);
  const newEvents = [payload, ...events];
  localStorage.setItem("events", JSON.stringify(newEvents));
  yield put({ type: SAVE_EVENT, payload: newEvents });
}

function* getEventsSaga(action) {
  const events = JSON.parse(
    localStorage.getItem("events") || JSON.stringify([])
  );
  yield put({ type: SAVE_EVENT, payload: events });
}

export const getEvents = () => ({ type: GET_EVENTS_TRIGGER });

export const saveEvent = (eventObject) => ({
  type: SAVE_EVENT_TRIGGER,
  payload: eventObject,
});

function* eventSaga() {
  yield takeEvery(SAVE_EVENT_TRIGGER, saveEventSaga);
  yield takeLatest(GET_EVENTS_TRIGGER, getEventsSaga);
}

export default eventSaga;
