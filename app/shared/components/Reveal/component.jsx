import React from 'react'
import classNames from 'classnames'
import formBuilder from '../FormBuilder/component.jsx'

const Reveal = props => {
  let Components = formBuilder(props.content)
  let classes = classNames('js-hidden', props.className, props.modifiers)

  return (
    <div className={classes} id={props.id}>
      {Components}
    </div>
  )
}

export default Reveal
