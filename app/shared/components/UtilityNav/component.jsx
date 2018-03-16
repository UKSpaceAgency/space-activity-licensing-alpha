import React from 'react'

const UtilityNav = ({type, onChangeHandler}) => {
  return (
    <ul id='proposition-links'>
      <li><a href='https://www.gov.uk/service-manual/service-standard'>Digital Service Standard</a></li>
      <li><a href='https://www.gov.uk/service-toolkit'>Service Toolkit</a></li>
      <li><a href='https://www.gov.uk/service-manual'>Service Manual</a></li>
      <li><a href='https://www.gov.uk/contact/govuk'>Feedback</a></li>
    </ul>
  )
}

export default UtilityNav
