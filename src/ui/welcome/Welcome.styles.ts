import { appStyled } from '../styles/AppThemes'

export const WelcomeStyles = {
  Container: appStyled.SafeAreaView`
      flex: 1;
      justify-content: center;
      align-items: center;
    `,
  Title: appStyled.Text`
      font-size: 28px;
    `,
  Subtitle: appStyled.Text`
      font-size: 17px;
    `,
}
