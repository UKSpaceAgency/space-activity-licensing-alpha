import React from 'react'

const Spinner = props => {
  return (
    <aside className='loading fixed'>
      <a href={props.url}>
        <div className={'spinner ' + props.modifiers}>
          <span className='spinner__inner'>{props.label}</span>
        </div>
      </a>
    </aside>
  )
}

export default Spinner
