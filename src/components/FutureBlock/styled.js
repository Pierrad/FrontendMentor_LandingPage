import styled from 'styled-components'
import colors from '../../theme/colors'

export const Container = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Title = styled.span`
  font-family: 'OverpassBold', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color : ${colors.veryDarkBlue};
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
`

export const ContentLeft = styled.div`
  max-width: 25rem;
  margin-right: 30rem;
  padding: 1rem 4rem;
`

export const Subtitle = styled.span`
  font-family: 'OverpassBold', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color : ${colors.veryDarkBlue};
`

export const Text = styled.p`
  font-family: 'OverpassRegular', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.5;
  color : ${colors.veryDarkGrayishBlue};
  margin-top: 1rem;
  margin-bottom: 3rem;
`

export const Image = styled.img`
  width: 50%;
  position: absolute;
  right: -10%;
  top: -10%;
  z-index: 3;
`