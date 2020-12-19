import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger'
import thunk from 'redux-thunk'


import rootReducer from './reducers';


const persistConfig = {
  key: 'key',
  storage: AsyncStorage,
  whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
)

const persistor = persistStore(store);

export { store, persistor }