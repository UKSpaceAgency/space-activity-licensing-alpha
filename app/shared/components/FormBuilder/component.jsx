import React from 'react'
import Heading from '../../components/Heading/component.jsx'
import Fieldset from '../../components/Fieldset/component.jsx'
import FormGroup from '../../components/FormGroup/component.jsx'
import RadioCheck from '../../components/RadioCheck/component.jsx'
import Button from '../../components/Button/component.jsx'
import ButtonGroup from '../../components/ButtonGroup/component.jsx'
import Select from '../../components/Select/component.jsx'
import Textarea from '../../components/Textarea/component.jsx'
import { isArray } from '../../utilities'

const formBuilder = (formItems) => {
  let components = []

  formItems = isArray(formItems) ? formItems : [formItems]

  for (let i = 0; i < formItems.length; i++) {
    let item = formItems[i]
    let component

    switch (item.contentType) {
      case 'fieldSet':
        component = <Fieldset {...item} key={i} />
        break
      case 'formGroup':
        component = <FormGroup {...item} key={i} />
        break
      case 'textarea':
        component = <Textarea {...item} key={i} />
        break
      case 'boolean':
        component = <RadioCheck {...item} key={i} />
        break
      case 'heading':
        component = <Heading {...item} key={i} />
        break
      case 'select':
        component = <Select {...item} key={i} />
        break
      case 'button':
        component = <Button {...item} key={i} />
        break
      case 'buttongroup':
        component = <ButtonGroup {...item} key={i} />
        break
      default:
        console.error('Could not match ' + item.contentType)
        continue
    }
    components.push(component)
  }
  return components
}

export default formBuilder
