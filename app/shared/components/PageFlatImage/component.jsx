import React from 'react'
// import Masthead from '../Masthead/component.jsx'

const Page = props => {

  let image = <img src={props.src} alt='' />
  let hyperlinked = props.href ? <a href={props.href}>{image}</a> : image

  return (
    <React.Fragment>
      {hyperlinked}
    </React.Fragment>
  )
}

export default Page
