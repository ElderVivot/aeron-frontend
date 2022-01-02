import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
    colors: {
        palette: {
            1: '#d0dccb',
            2: '#d7c7be',
            2.2: '#f3f3f3',
            3: '#b3c5ba',
            4: '#88c3b5',
            5: '#6d6168',
            blue: '#058BC0',
            blue2: '#2C5288',
            yellow: '#F2AE30',
            yellow2: '#F9E4CB'
        }
    },
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