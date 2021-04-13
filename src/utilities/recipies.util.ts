import { useCallback } from 'react'
import { Selector, useDispatch, useSelector } from 'react-redux'

import { AppState } from '../redux/AppState'

/**
 * to use when returning a primitive value from
 * the selector
 * @prop props required when selector has value in closure,
 * else it wont re-render when said value changes
 * eg: state => state.server[serverKey].status; serverKey is the prop
 */
export const useASelector = <TSelected, TState = AppState>(selector: Selector<TState, TSelected>, props?: any) =>
  useSelector<TState, TSelected>(useCallback(selector, [props]))

/*
 * ** Usage **
 * const useAction = makeHook(authActions)
 * const action = useAction('confirmSignUp')
 */
export function makeActionHook<T>(actions: T) {
  return <A extends keyof T>(action: A, isNull = false): T[A] => {
    const dispatch = useDispatch()
    const act = actions[action] as any
    const callback = isNull ? () => dispatch(act()) : (payload: any) => dispatch(act(payload))
    return useCallback(callback, []) as any
  }
}
