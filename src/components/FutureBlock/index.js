import React from 'react'
import PropTypes from 'prop-types';

import * as SC from "./styled"

const FutureBlock = (props) => {
  const { className } = props
  return (
    <SC.Container className={className}>
      <SC.Title>Designed for the future</SC.Title>
      <SC.Content>
        <SC.ContentLeft>
          <SC.Subtitle>Introducing an extensible editor</SC.Subtitle>
          <SC.Text>
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos,
            and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of 
            a blog.
          </SC.Text>
          <SC.Subtitle>Robust content management</SC.Subtitle>
          <SC.Text>
            Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding
            customized categories, sections, format, or flow. With this functionality, you're in full control.
          </SC.Text>
        </SC.ContentLeft>
        <SC.Image src="./images/illustration-editor-desktop.svg"/>
      </SC.Content>
    </SC.Container>
  )
}

FutureBlock.propTypes = {
  className: PropTypes.string,
}

export default FutureBlock