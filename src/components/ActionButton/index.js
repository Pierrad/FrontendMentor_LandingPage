import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"

const ActionButton = (props) => {
  const { className, label, url, isOutlined } = props

  const handleOnClick = () => {
    window.open(url)
  }

  return (
    <SC.Container className={className} onClick={handleOnClick} isOutlined={isOutlined}>
      <SC.Span>{label}</SC.Span>
    </SC.Container>
  )
}

ActionButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  isOutlined: PropTypes.bool,
}

export default ActionButton