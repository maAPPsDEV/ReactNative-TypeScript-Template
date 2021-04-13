import AsyncStorage from '@react-native-community/async-storage'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Action, Reducer, Store } from 'redux'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'

export type Persistor = ReturnType<typeof persistStore>

function createStoreWithMiddleware<AppState, AnyAction extends Action>(
  rootReducer: Reducer<AppState>,
): { store: Store<AppState, AnyAction>; persistor: Persistor } {
  const persistConfig = {
    key: 'root',
    // if share isnt here it will try to 'save' the base64 pdf sent in the action
    blacklist: ['global'],
    storage: AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })
  const persistor = persistStore(store)

  return { store: store as any, persistor }
}

export { createStoreWithMiddleware }
