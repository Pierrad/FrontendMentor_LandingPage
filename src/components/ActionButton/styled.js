import styled from 'styled-components'
import colors from '../../theme/colors'


export const Container = styled.button`
  background-color: ${props => props.isOutlined ? 'transparent' : colors.white };
  padding: 0.8rem 2rem;
  border: 0;
  border: ${props => props.isOutlined ? '1px solid white' : 0 };
  border-radius: 1.5rem;
  & > span {
    color: ${props => props.isOutlined ? colors.white : colors.lightRed };
  }
  &:hover {
    cursor: pointer;
    background-color: ${props => props.isOutlined ? colors.white : colors.veryLightRed };
    & > span {
      color: ${props => props.isOutlined ? colors.lightRed : colors.white };
    }
  }
`

export const Span = styled.span`
  font-family: 'UbuntuBold', sans-serif;
  font-weight: 700;
  
`