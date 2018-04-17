import React from 'react'
import classNames from 'classnames'

const Longform = props => {
  let {text, intro, modifiers} = props
  let classes = classNames('long-form', props.className, props.modifiers)

  return (
    <article>
      {intro && <p className={props.modifiers || 'lede'}>{intro}</p>}
      {text && <div className={classes} dangerouslySetInnerHTML={{__html: text}} />}
    </article>
  )
}

export default Longform
