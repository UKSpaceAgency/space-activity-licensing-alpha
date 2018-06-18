import React from 'react'

const Tab = props => {
	console.log(props.newComment, props.id)
  return (
    <li role='presentation' className='tabs__item'>
      <a className='tabs__link' id={props.id + '-tab'} href={'#' + props.id} role='tab' data-tab={props.id} aria-controls={props.id}>{props.children}{props.label} <span data-tab-count className={props.newComment || null}></span><span className='close' data-close-tab>&times;</span></a>
    </li>
  )
}

export default Tab
