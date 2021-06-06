import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"
import ActionButton from "../ActionButton/index"

const NavBar = (props) => {
  const { className } = props

  const dropDownItemsProduct = [
    {
      label: 'Product1',
      url: 'https://www.google.com',
    },
    {
      label: 'Product2',
      url: 'https://www.google.com',
    },
    {
      label: 'Product3',
      url: 'https://www.google.com',
    },
  ]

  const dropDownItemsCompany = [
    {
      label: 'Company1',
      url: 'https://www.google.com',
    },
    {
      label: 'Company2',
      url: 'https://www.google.com',
    },
    {
      label: 'Company3',
      url: 'https://www.google.com',
    },
  ]

  const dropDownItemsContact = [
    {
      label: 'Contact',
      url: 'https://www.google.com',
    },
    {
      label: 'Newsletter',
      url: 'https://www.google.com',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.google.com',
    },
  ]

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