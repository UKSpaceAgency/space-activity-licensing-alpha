import React from 'react'

const Tab = props => {

  return (
    <li role='presentation' className='tabs__item'>
      <a className='tabs__link' id={props.id + '-tab'} href={'#' + props.id} role='tab' aria-controls={props.id}>{props.children}{props.label}<span className='close' data-close-tab>&times;</span></a>
    </li>
  )
}

export default Tab
