import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const primaryColor = 'black' 

export default createGlobalStyle`
    body{
        background-color: ${colors.backgroundPrimaryColor} !important;
    }
`