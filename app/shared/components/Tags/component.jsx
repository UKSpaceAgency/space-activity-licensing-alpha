import React from 'react'

const Tags = props => {

  return (
    <ul className='tags'>
      {props.tags.map((v, i) => <li key={i} className='tag'><span className='tag__text'>{v.label}</span><a href='#' className='close'>&times;</a></li>)}
    </ul>
  )
}

export default Tags
