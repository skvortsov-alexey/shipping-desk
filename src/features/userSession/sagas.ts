import { put, takeLeading } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import api from 'api'
import { SignInPayload } from './types'
import { actions } from './reducer'

function* systemSaga() {
  yield takeLeading(actions.signIn.type, sighInSaga)
  yield put(actions.signIn('cdcsdc@gmail.com', 'csdcsdc'))
}

function* sighInSaga({ payload }: PayloadAction<SignInPayload>) {
  try {
    const { login, password } = payload 
    yield api.signIn(login, password)
    yield put(actions.signInSuccess())
  } catch (e) {
    yield put(actions.signInFailure(e.message, e.code))
  }  
}

export default systemSaga