import { fork } from 'redux-saga/effects'

import userSessionSaga from 'features/userSession/sagas'

function* rootSaga() {
  yield fork(userSessionSaga)
}

export default rootSaga