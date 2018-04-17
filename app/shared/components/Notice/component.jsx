import React from 'react'
import classNames from 'classnames'
import Icon from '../../components/Icon/component.jsx'

const Notice = props => {
  let classes = classNames('notice', props.className, props.modifiers)

  return (
    <div className={classes}>
      <Icon {...props.icon} />
      <strong className='bold-small'>
        {props.content}
      </strong>
    </div>
  )
}

export default Notice
