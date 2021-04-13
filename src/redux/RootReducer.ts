import { combineReducers } from 'redux'

import { globalReducer } from './slices/global.slice'

const rootReducer = combineReducers({
  global: globalReducer,
})

export { rootReducer }
