import { useASelector } from '../../utilities/recipies.util'

const useWelcome = () => {
  const value = useASelector((state) => state.global.value, [])

  return {
    value,
  }
}

export const WelcomeHooks = { useWelcome }
