import {takeEvery, put, call} from "redux-saga/effects";
import {FETCH_USERS, SHOW_USERS} from "./types";
import {hideLoader, showLoader} from "./actions";

export function* sagaWatcher() {
  yield takeEvery(SHOW_USERS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload: {} = yield call(fetchUsers);
    yield put({ type: FETCH_USERS, payload });
    yield put(hideLoader());
  } catch (e) {
    console.log('Что-то пошло не так');
    yield put(hideLoader());
  }
}

async function fetchUsers() {
  const response = await fetch('https://api.github.com/users');
  return await response.json();
}