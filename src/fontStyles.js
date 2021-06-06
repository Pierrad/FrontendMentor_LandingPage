import { createGlobalStyle } from "styled-components"

import OverpassRegular from './fonts/Overpass/Overpass-Regular.woff2'
import OverpassMedium from './fonts/Overpass/Overpass-Medium.woff2'

import UbuntuRegular from './fonts/Ubuntu/Ubuntu-Regular.woff2'
import UbuntuMedium from './fonts/Ubuntu/Ubuntu-Medium.woff2'
import UbuntuBold from './fonts/Ubuntu/Ubuntu-Bold.woff2'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'OverpassRegular';
    src: url(${OverpassRegular}) format('woff2')
  }
  @font-face {
    font-family: 'OverpassMedium';
    src: url(${OverpassMedium}) format('woff2')
  }
  @font-face {
    font-family: 'UbuntuRegular';
    src: url(${UbuntuRegular}) format('woff2')
  }
  @font-face {
    font-family: 'UbuntuMedium';
    src: url(${UbuntuMedium}) format('woff2')
  }
  @font-face {
    font-family: 'UbuntuBold';
    src: url(${UbuntuBold}) format('woff2')
  }
`

export default FontStyles