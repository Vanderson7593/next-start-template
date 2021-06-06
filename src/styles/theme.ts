import { colors } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  props: {
    MuiLink: {
      underline: 'none',
      target: '_blank',
      color: 'inherit'
    }
  },
  palette: {
    type: 'light',
    background: {
      default: colors.grey[200],
      paper: colors.grey[50]
    },
    primary: {
      light: colors.lightBlue[600],
      main: colors.blue[700],
      dark: colors.blue[900]
    },
    text: {
      primary: colors.grey[800],
      secondary: colors.grey[50]
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Open Sans', '-apple-system'].join(',')
  }
})

theme = responsiveFontSizes(theme)

export default theme
