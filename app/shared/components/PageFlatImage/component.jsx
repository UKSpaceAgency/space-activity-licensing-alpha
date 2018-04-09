import React from 'react'

const Page = props => {
  let image = <img src={props.image} alt='' />
  let hyperlinked = props.href ? <a href={props.href}>{image}</a> : image

  return (
    <div className='align-centre'>
      {hyperlinked}
    </div>
  )
}

export default Page
