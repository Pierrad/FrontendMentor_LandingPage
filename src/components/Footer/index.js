import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"
import Menu from "./mock"

const Footer = (props) => {
  const { className } = props

  return (
    <SC.Container className={className}>
      <SC.Wrapper>
        <SC.Image src="./images/logo.svg"/>
        {Menu.map((m) => (
          <SC.MenuColumn>
            <SC.MenuTitle>{m.title}</SC.MenuTitle>
            <SC.MenuItems>
              {m.items.map((i) => (
                <SC.MenuItem href={i.url}>{i.label}</SC.MenuItem>
              ))}
            </SC.MenuItems>
          </SC.MenuColumn>
        ))}
      </SC.Wrapper>
    </SC.Container>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer