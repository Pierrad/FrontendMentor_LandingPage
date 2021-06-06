import styled from 'styled-components'

import Header from './components/Header/index'
import Footer from './components/Footer/index'

export const Container = styled.div`
  position: relative;
  height: 100%;
`

export const MyHeader = styled(Header)`
  position: fixed;
  top: 0;
`

export const MyFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
`