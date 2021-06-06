import styled from 'styled-components'
import colors from '../../theme/colors'

export const Container = styled.div`
  width: 100%;
  border-top-right-radius: 5rem;
  background-color: ${colors.veryDarkBlackBlue}; 
`

export const Wrapper = styled.div`
  padding: 3rem 8rem;
  display: flex;
  flex-direction: row;
`

export const Image = styled.img`
  height: 2.5rem;
  margin-right: 4rem;
`

export const MenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
`

export const MenuTitle = styled.span`
  font-family: 'UbuntuRegular', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  color: ${colors.white};
  margin-top: 0.8rem;
`

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`

export const MenuItem = styled.a`
  font-family: 'UbuntuRegular', sans-serif;
  font-size: 0.8rem;
  color: ${colors.grayishBlue};
  text-decoration: none;
  margin-bottom: 0.8rem;
  &:hover {
    text-decoration: underline;
  }
`