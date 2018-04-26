import React from 'react'
import classNames from 'classnames'

const FileUpload = props => {
  let classes = classNames('form-group form-group-file', props.className, props.modifiers)
  let labelClasses = classNames('form-label', props.modifiers, {
    'hidden': !props.shimmed
  })
  let data = props.shimmed ? {'data-file': true} : null

  return (
    <div className={classes} {...data}>
      {props.shimmed && <span className='form-control__text' data-file-text></span>}
      <label className={labelClasses} htmlFor={'file-' + props.id}>
        {props.label}
      </label>
      <input className='form-control' type='file' id={'file-' + props.id}/>
    </div>
  )
}

export default FileUpload
