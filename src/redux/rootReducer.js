import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

// import all reducers here
import authReducer from './auth/authReducer'

//config the persistor
const persistConfig = {
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  auth: authReducer,
})

export default persistReducer(persistConfig, rootReducer)
