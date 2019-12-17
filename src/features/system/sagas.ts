import { takeLeading } from 'redux-saga/effects'

import { SIGN_IN } from './types'

function* systemSaga() {
  yield takeLeading(SIGN_IN, sighInSaga)
}

function* sighInSaga() {
  console.log('SignIn')
}

export default systemSaga