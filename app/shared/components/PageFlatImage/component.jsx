import React from 'react'

const Page = props => {
  let image = <img src={props.image} alt='' />
  let hyperlinked = props.href ? <a href={props.href}>{image}</a> : image

  return (
    <div className='align-centre'>
      {hyperlinked}
      {props.returnLink && <div className='bg-orange'><a className='link-huge constrained' href={props.returnLink}>Go to {props.returnLink}</a></div>}
    </div>
  )
}

export default Page
