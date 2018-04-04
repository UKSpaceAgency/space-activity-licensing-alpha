import React from 'react'

const Tab = props => {

  return (
    <li role='presentation'>
      <a id={props.id + '-tab'} href={'#' + props.id} role='tab' aria-controls={props.id}>{props.label}</a>
    </li>
  )
}

export default Tab
