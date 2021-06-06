import styled from 'styled-components'
import colors from '../../theme/colors'

export const DropDown = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 1rem 3rem 0.4rem 1rem;
  border-radius: 0.3rem;
  max-width: 3rem;
  margin-top: 0.5rem;
  left: -0.5rem;
`

export const Image = styled.img`
  margin-left: 0.5rem;
`

export const Container = styled.div`
  position: relative;
  &:hover {
    ${DropDown} {
      display: flex;
    }
    ${Image} {
      transform: rotate(180deg);
    }
  }
`

export const Label = styled.span`
    font-family: 'OverpassRegular', sans-serif;
    font-size: 1rem;
    color: ${colors.white};

`

export const Link = styled.a`
  font-family: 'OverpassRegular', sans-serif;
  font-size: 0.8rem;
  text-decoration: none;
  color: ${colors.veryDarkBlackBlue};
  margin-bottom: 0.6rem;
  &:hover {
    font-weight: 700;
  }
`

