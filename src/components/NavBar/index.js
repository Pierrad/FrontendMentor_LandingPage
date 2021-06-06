import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"
import { dropDownItemsProduct, dropDownItemsCompany, dropDownItemsContact } from './mock'
import ActionButton from "../ActionButton/index"


const NavBar = (props) => {
  const { className } = props

  return (
    <SC.Container className={className}>
      <SC.Image src="./images/logo.svg"/>
      <SC.DropDownDiv>
        <SC.DropDownItems label="Product" dropDownList={dropDownItemsProduct} />
        <SC.DropDownItems label="Company" dropDownList={dropDownItemsCompany} />
        <SC.DropDownItems label="Contact" dropDownList={dropDownItemsContact} />
      </SC.DropDownDiv>
      <SC.LogDiv>
        <SC.Link href="https://www.google.com">Login</SC.Link>
        <ActionButton label="Sign up" url="https://www.google.com" />
      </SC.LogDiv>
    </SC.Container>
  )
}

NavBar.propTypes = {
  className: PropTypes.string,
}

export default NavBar