import { combineReducers, createStore } from 'redux'

import entities from 'features/entities/reducer'
import system from 'features/system/reducer'

function configureStore() {
  const rootReducer = combineReducers({
    entities,
    system
  })
  
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
  
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducer', () => {
      const newRootReducer = require('./reducer').default
      store.replaceReducer(newRootReducer)
    })
  }

  return store
}

export default configureStore