import React from 'react'

const Time = props => {
  return (
    <time className='time' dateTime={props.datetime}>{props.date}</time>
  )
}

export default Time
