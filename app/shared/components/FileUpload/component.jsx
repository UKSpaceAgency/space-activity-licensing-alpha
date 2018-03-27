import React from 'react'
import classNames from 'classnames'

const FileUpload = props => {
  let classes = classNames('form-group form-group-file', props.className, props.modifiers)
  return (
    <div className={classes} data-file>
      <label className='form-label' htmlFor={'file-' + props.id}>
        {props.label}
      </label>
      <input type='file' id={'file-' + props.id} data-file-input/>
    </div>
  )
}

export default FileUpload
