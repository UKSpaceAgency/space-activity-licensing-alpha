import React from 'react'
import classNames from 'classnames'

const FileUpload = props => {
  let classes = classNames('form-group form-group-file', props.className, props.modifiers)
  return (
    <div className={classes} data-file>
      {props.shimmed && <span className='form-control__text' data-file-text></span>}
      <label className='form-label' htmlFor={'file-' + props.id}>
        {props.label}
      </label>
      <input className='form-control' type='file' id={'file-' + props.id} data-file-input/>
    </div>
  )
}

export default FileUpload
