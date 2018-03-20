import React from 'react'
import classNames from 'classnames'

const Blockquote = props => {
  let {quote, name, role, modifiers} = props
  let classes = classNames('blockquote', modifiers)

  return (
    <blockquote className={classes}>
      <p className=''>{quote}</p>
      {name && <cite className='blockquote__citation'><b>{name}</b>{role && <span> - {role}</span>}</cite>}
    </blockquote>
  )
}

export default Blockquote
