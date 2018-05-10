import React from 'react'
import classNames from 'classnames'

const Spinner = props => {
  let classes = classNames('loading fixed', {
    'hidden': props.hidden
  })

  return (
    <aside className={classes} id='spinner'>
      <a href={props.url}>
        <div className={'spinner ' + props.modifiers}>
          <span className='spinner__inner'>{props.label}</span>
        </div>
      </a>
    </aside>
  )
}

export default Spinner
