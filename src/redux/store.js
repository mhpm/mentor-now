import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

const middlewares = [thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store)

//store.subscribe(() => console.log(store.getState()))

export { store, persistor }
