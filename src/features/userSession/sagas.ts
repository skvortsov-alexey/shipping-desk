import { put, takeLeading } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import api from 'api'
import { Credentials } from './types'
import { actions } from './reducer'

function* userSessionSaga() {
  yield takeLeading(actions.signIn, sighInSaga)
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

export default userSessionSaga