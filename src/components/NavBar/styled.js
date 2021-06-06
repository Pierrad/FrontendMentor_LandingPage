import styled from 'styled-components'
import colors from '../../theme/colors'

import DropDownItem from '../DropDownItem/index'

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`

export const Image = styled.img`
  margin-right: 2rem;
`

export const DropDownDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const DropDownItems = styled(DropDownItem)`
  margin: 0 1.5rem 0 0;
  overflow: visible;
`

export const LogDiv = styled.div`
  position: absolute;
  right: 8rem;
`

export const Link = styled.a`
  font-family: 'OverpassRegular', sans-serif;
  font-size: 0.8rem;
  text-decoration: none;
  color: ${colors.white};
  margin-right: 1rem;
`