import React from 'react'
import classNames from 'classnames'

export default class InterviewList extends React.Component {
  render () {
    let {text, loading} = this.props

    let classes = classNames('spinner', {
      'spinner--active': loading
    })

    return (
      <div className={classes}>
        <span className='spinner__inner'>{text}</span>
      </div>
    )
  }
}
