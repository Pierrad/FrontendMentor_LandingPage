import styled from 'styled-components'
import colors from '../../theme/colors'

import NavBar from "../NavBar/index"  


export const Container = styled.div`
  height: 25rem;
  width: 100%;
  background-image: linear-gradient(to right, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
  border-bottom-left-radius: 5rem;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('./images/bg-pattern-intro.svg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: 150% 600%;
`

export const NavigationBar = styled(NavBar)`
  max-width: 100%;
  padding: 2rem 8rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
    font-family: 'UbuntuBold', sans-serif;
    font-weight: 700;
    color: ${colors.white};
    font-size: 4rem;
    margin-bottom: 1rem;
`

export const Subtitle = styled.h3`
    font-family: 'UbuntuMedium', sans-serif;
    font-weight: 400;
    color: ${colors.white};
    margin-bottom: 2rem;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  & > button {
    margin: 0 1rem;
  }
`
