import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"

const InfrastructureBlock = (props) => {
  const { className } = props
  return (
    <SC.Container className={className}>

    </SC.Container>
  )
}

InfrastructureBlock.propTypes = {
  className: PropTypes.string,
}

export default InfrastructureBlock