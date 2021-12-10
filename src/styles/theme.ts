import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.010',
        color: 'gray.700'
      }
    }
  }
})
