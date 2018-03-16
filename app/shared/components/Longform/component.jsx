import React from 'react'

const Longform = props => {
  let {text, intro, modifiers} = props

  return (
    <article>
      {intro && <p className={props.modifiers || 'lede'}>{intro}</p>}
      {text && <div className='long-form' dangerouslySetInnerHTML={{__html: text}} />}
    </article>
  )
}

export default Longform
