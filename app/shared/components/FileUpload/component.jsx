import React from 'react'

const FileUpload = props => {
  return (
    <div className='form-group form-group-file' data-file>
      <label className='form-label' htmlFor={'file-' + props.id}>
        {props.label}
      </label>
      <input type='file' id={'file-' + props.id} data-file-input/>
      <span className='' data-file-text></span>
    </div>
  )
}

export default FileUpload
