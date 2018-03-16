import React from 'react'

const Breadcrumb = props => {
  let isLast = (arr, index) => (arr.length - 1) === index

  const navigationComponents = props.breadcrumb.map((item, index) => {
    let navitem
    let { url, text } = item

    if (isLast(props.breadcrumb, index)) {
      navitem = (
        <li aria-current='page' key={index}>{text}</li>
      )
    } else {
      navitem = (<li key={index}><a href={url}>{text}</a></li>)
    }

    return navitem
  })

  return (
    <nav className={'breadcrumbs ' + props.className}>
      <ol>
        {navigationComponents}
      </ol>
    </nav>
  )
}

export default Breadcrumb
