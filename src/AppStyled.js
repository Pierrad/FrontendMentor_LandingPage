import styled from 'styled-components'

import Header from './components/Header/index'
import Footer from './components/Footer/index'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`

export const MyHeader = styled(Header)`
  height: 25rem;
`

export const MyFooter = styled(Footer)`
  position: absolute;
  margin-top: 100vh;
`