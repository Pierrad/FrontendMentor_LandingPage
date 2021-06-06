import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"

const Footer = (props) => {
  const { className } = props
  return (
    <SC.Container className={className}>
      HEllO
    </SC.Container>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer