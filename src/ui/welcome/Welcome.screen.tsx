import React from 'react'

import { WelcomeHooks } from './Welcome.hook'
import { WelcomeStyles as UI } from './Welcome.styles'

const { useWelcome } = WelcomeHooks

const Welcome = () => {
  const { value } = useWelcome()

  return (
    <UI.Container>
      <UI.Title>Welcome!</UI.Title>
      <UI.Subtitle>{value ? 'true' : 'false'}</UI.Subtitle>
    </UI.Container>
  )
}

export default React.memo(Welcome)
