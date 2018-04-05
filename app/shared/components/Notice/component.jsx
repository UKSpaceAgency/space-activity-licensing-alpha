import React from 'react'
import Icon from '../../components/Icon/component.jsx'

const Notice = props => {
  return (
    <div className='notice'>
      <Icon {...props.icon} />
      <strong className='bold-small'>
        {props.content}
      </strong>
    </div>
  )
}

export default Notice
