import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"

const DropDownItem = (props) => {
  const { className, label, dropDownList } = props

  return (
    <SC.Container className={className}>
      <SC.Label>{label}</SC.Label>
      <SC.Image src="./images/icon-arrow-light.svg"/>
      {dropDownList && (
        <SC.DropDown>
          {dropDownList.map((l) => (
            <SC.Link href={l.url}>{l.label}</SC.Link> 
          ))}
        </SC.DropDown>
      )}
    </SC.Container>
  )
}

DropDownItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  dropDownList: PropTypes.arrayOf({
    label: PropTypes.string,
    url: PropTypes.string,
  }),
}

export default DropDownItem