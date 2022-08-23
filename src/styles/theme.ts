import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Inter, sans-serif',
        bgColor: 'primary'
      }
    }
  },
  colors: {
    purple: {
      200: '#646DBB',
      500: '#34348C'
    },
    gray: {
      800: '#231F20'
    },
    blue: {
      500: '#1D8FCF'
    },
    red: {
      500: '#EE2026'
    },
    yellow: {
      500: '#F9E008'
    },
    orange: {
      500: '#F47821'
    },
    cyan: {
      500: '#5EC5BB'
    }
  },
  semanticTokens: {
    colors: {
      primary: 'purple.500',
      secondary: 'purple.200',
      tertiary: 'gray.800',
      werewolf: 'red.500',
      village: 'yellow.500',
      monster: 'orange.500',
      zombie: 'cyan.500'
    }
  }
})

export default theme
