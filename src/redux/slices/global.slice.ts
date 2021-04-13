import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { makeActionHook } from '../../utilities/recipies.util'

type State = {
  value: boolean
}

const INITIAL_STATE: State = {
  value: false,
}

const globalSlice = createSlice({
  name: '@global',
  initialState: INITIAL_STATE,
  reducers: {
    setValue: (state, { payload }: PayloadAction<boolean>) => {
      state.value = payload
    },
  },
})

export const globalActions = globalSlice.actions
export const globalReducer = globalSlice.reducer
export const useGlobalActions = makeActionHook(globalActions)
