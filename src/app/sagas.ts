import { fork } from 'redux-saga/effects'

import systemSaga from 'features/system/sagas'

function* rootSaga() {
  yield fork(systemSaga)
}

export default rootSaga