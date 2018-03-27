import React from 'react'
import Icon from '../Icon/component.jsx'

const Heading = props => {
  const Tag = `${props.type || 'h2'}`
  let icon = props.icon ? <Icon {...props.icon} /> : null
  return (
    <Tag className={props.modifiers}>{icon}<span dangerouslySetInnerHTML={{__html: props.text}}></span></Tag>
  )
}

export default Heading
