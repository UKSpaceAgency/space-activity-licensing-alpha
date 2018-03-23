import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon/component.jsx'

const List = props => {
  let classes = classNames('list', props.className, props.modifiers)

  const list = props.list.map((item, index) => {
    let listItem
    let itemClasses = classNames(item.modifiers)
    let supporting = item.supporting ? item.supporting : null

    if (item.url) {
      listItem = (<li key={index} className={itemClasses}>
        <a href={item.url}>
          {item.icon && <Icon {...item.icon}/>}
          {item.text} {supporting}
        </a>
      </li>
      )
    } else {
      listItem = (
        <li key={index} className={itemClasses}>{item.icon && <Icon {...item.icon}/>} {item.text} {supporting}</li>
      )
    }

    return listItem
  })

  return (
    <ul className={classes}>
      {list}
    </ul>
  )
}

export default List
