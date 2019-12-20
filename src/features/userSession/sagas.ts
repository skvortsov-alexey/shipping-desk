import { put, takeLeading } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import api from 'api'
import { Failure } from 'app/types'
import { Credentials } from './types'
import { actions } from './slice'

function* userSessionSaga() {
  yield takeLeading(actions.signIn, signInSaga)
  yield takeLeading(actions.signOut, signOutSaga)
  yield takeLeading(actions.signUp, signUpSaga)
}

function* signInSaga(action: PayloadAction<Credentials>) {
  try {
    const { email, password } = action.payload
    yield api.signIn(email, password)
    yield put(actions.signInSuccess())
  } catch (e) {
    yield put(actions.signInFailure(new Failure(e.message, e.code)))
  }
}

function* signOutSaga(action: PayloadAction<void>) {
  try {
    yield api.signOut()
    yield put(actions.signOutSuccess())
  } catch (e) {
    yield put(actions.signOutFailure(new Failure(e.message, e.code)))
  }
}

function* signUpSaga(action: PayloadAction<Credentials>) {
  try {
    const { email, password } = action.payload
    yield api.createUser(email, password)
    yield put(actions.signUpSuccess())
  } catch (e) {
    yield put(actions.signUpFailure(new Failure(e.message, e.code)))
  }
}

export default userSessionSaga