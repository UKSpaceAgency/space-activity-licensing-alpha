import React from 'react'
import classNames from 'classnames'

const Title = props => {
  let { title, subTitle, modifiers } = props
  let classes = classNames('heading-xlarge', props.className, props.modifiers)

  return (
    <h1 className={classes}>
      {subTitle && <span className='heading-secondary'>{subTitle}</span>}
      {title}
    </h1>
  )
}

export default Title
