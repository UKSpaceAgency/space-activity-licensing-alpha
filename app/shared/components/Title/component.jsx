import React from 'react'

const Title = props => {
  let { title, subTitle, modifiers } = props

  return (
    <h1 className={modifiers || 'heading-xlarge'}>
      {subTitle && <span className='heading-secondary'>{subTitle}</span>}
      {title}
    </h1>
  )
}

export default Title
