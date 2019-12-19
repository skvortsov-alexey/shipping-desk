import { put, takeLeading } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import api from 'api'
import { Credentials } from './types'
import { actions } from './reducer'

function* userSessionSaga() {
  yield takeLeading(actions.signIn, sighInSaga)
  yield takeLeading(actions.signOut, signOutSaga)
  yield takeLeading(actions.signUp, sighUpSaga)
  
  const credentials = { email: 'cdcsdc@gmail.com', password: 'cdcsdcsdc' }
  yield put(actions.signIn(credentials))
}

function* sighInSaga(action: PayloadAction<Credentials>) {
  try {
    const { email, password } = action.payload
    yield api.signIn(email, password)
    yield put(actions.signInSuccess())
  } catch (e) {
    yield put(actions.signInFailure(e))
  }  
}

function* signOutSaga(action: PayloadAction<void>) {
  try {
    yield api.signOut()
    yield put(actions.signOutSuccess())
  } catch (e) {
    yield put(actions.signOutFailure(e))
  }  
}

function* sighUpSaga(action: PayloadAction<Credentials>) {
  try {
    const { email, password } = action.payload
    yield api.createUser(email, password)
    yield put(actions.signUpSuccess())
  } catch (e) {
    yield put(actions.signUpFailure(e))
  }  
}

export default userSessionSaga