import React from 'react'
import classNames from 'classnames'

export default class Blockquote extends React.Component {
  render () {
    let {quote, name, role, modifiers} = this.props
    let classes = classNames('blockquote', modifiers)

    return (
      <blockquote className={classes}>
        <p className=''>{quote}</p>
        {name && <cite className='blockquote__citation'><b>{name}</b>{role && <span> - {role}</span>}</cite>}
      </blockquote>
    )
  }
}
