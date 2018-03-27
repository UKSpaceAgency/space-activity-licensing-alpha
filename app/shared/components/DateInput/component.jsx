import React from 'react'

const DateInput = props => {
  return (
    <div className='form-group'>
      <fieldset>
        <legend>
          <span className='form-label-bold'>
            What is your date of birth?
          </span>
          <span className='form-hint'>For example, 31 3 1980</span>
        </legend>
        <div className='form-date'>
          <div className='form-group form-group-day'>
            <label className='form-label' for='dob-day'>Day</label>
            <input className='form-control' id='dob-day' name='dob-day' type='number' pattern='[0-9]*'>
          </div>
          <div className='form-group form-group-month'>
            <label className='form-label' for='dob-month'>Month</label>
            <input className='form-control' id='dob-month' name='dob-month' type='number' pattern='[0-9]*'>
          </div>
          <div className='form-group form-group-year'>
            <label className='form-label' for='dob-year'>Year</label>
            <input className='form-control' id='dob-year' name='dob-year' type='number' pattern='[0-9]*'>
          </div>
        </div>
      <fieldset>
    </div>
  )
}

export default DateInput
