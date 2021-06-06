import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"
import ActionButton from "../ActionButton/index"

const Header = (props) => {
  const { className } = props
  return (
    <SC.Container className={className}>
      <SC.Wrapper>
        <SC.NavigationBar />
        <SC.Content>
            <SC.Title>A modern publishing platform</SC.Title>
            <SC.Subtitle>Grow your audience and build your online brand</SC.Subtitle>
            <SC.Buttons>
              <ActionButton label="Start for free" url="https://www.google.com" />
              <ActionButton label="Learn more" url="https://www.google.com" isOutlined/>
            </SC.Buttons>
        </SC.Content>
      </SC.Wrapper> 
    </SC.Container>
  )
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header