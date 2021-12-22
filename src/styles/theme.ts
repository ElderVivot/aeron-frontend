import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    fontSizes: {
        fs: '0.65rem'
    },
    components: {
        Select: {
            sizes: {
                md: { field: { paddingInlineEnd: null, px: 1 } },
                sm: { field: { paddingInlineEnd: null, px: 1 } },
                xs: { field: { paddingInlineEnd: null, px: 1 } }
            }
        },
        FormControl: {
            baseStyle: {
                zIndex: -1
            }
        }
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