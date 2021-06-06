import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"

const ComputerBlock = (props) => {
  const { className } = props
  return (
    <SC.Container className={className}>

    </SC.Container>
  )
}

ComputerBlock.propTypes = {
  className: PropTypes.string,
}

export default ComputerBlock