import React from 'react'
import classNames from 'classnames'

export default class List extends React.Component {
  render () {
    let classes = classNames('list', this.props.className, this.props.modifiers)

    const list = this.props.list.map((item, index) => {
      let listItem
      let itemClasses = classNames(item.modifiers)

      if (item.url) {
        listItem = (<li key={index} className={itemClasses}>
          <a href={item.url}>
            {item.text}
          </a>
        </li>
        )
      } else {
        listItem = (
          <li key={index} className={itemClasses}>{item.text}</li>
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
}
