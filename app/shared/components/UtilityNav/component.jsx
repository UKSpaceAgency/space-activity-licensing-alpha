import React from 'react'
import classNames from 'classnames'

const UtilityNav = props => {
  console.log(props, 'h hwljfhkjlhf skjghflksj')
  // @todo / @refactor - roll this together using the List component
  const list = props.links.map((v, i) => {
    let itemClasses = classNames('utility-nav__item', v.modifiers)

    return (<li key={i} className={itemClasses}>
      <a href={v.url}>
        {v.notification && <span className='notification'>{v.notification}</span>}
        {v.text}
      </a>
    </li>
    )
  })

  return (
    <nav id='proposition-menu'>
      <ul id='proposition-links' className='utility-nav'>
        {list}
      </ul>
    </nav>

  )
}

export default UtilityNav
