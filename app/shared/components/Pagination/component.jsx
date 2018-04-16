import React from 'react'

const Pagination = props => {
  let listItems = props.links.map((v, i) => {
    let Image = <img className='pagination__link-icon' src={'/ui/img/icons/pagination-' + v.state + '.svg'}/>
    return (
      <li className={'pagination__item pagination__item--' + v.state} key={i}>
        <a href={v.url} className='pagination__link' rel={v.state}>
          <span className='pagination__link-title'>
            {v.state === 'previous' && Image}
            {v.title}
            {v.state === 'next' && Image}
          </span>
          {v.label && <span className='pagination__link-label'>{v.label}</span>}
        </a>
      </li>
    )
  })

  return (
    <nav className='pagination' role='navigation' aria-label='Pagination'>
      <ul className='pagination__list'>
        {listItems}
      </ul>
    </nav>
  )
}

export default Pagination
