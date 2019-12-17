import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'
import rootSaga from './sagas'

function configureStore() {  
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const enhancers = [applyMiddleware(...middlewares)]

  const store = createStore(rootReducer, composeEnhancers(...enhancers))

  sagaMiddleware.run(rootSaga)
  
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducer', () => {
      const newRootReducer = require('./reducer').default
      store.replaceReducer(newRootReducer)
    })
  }

  return store
}

export default configureStore