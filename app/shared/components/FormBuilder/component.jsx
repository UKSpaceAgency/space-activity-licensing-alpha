import React from 'react'
import Heading from '../Heading/component.jsx'
import Fieldset from '../Fieldset/component.jsx'
import FormGroup from '../FormGroup/component.jsx'
import RadioCheck from '../RadioCheck/component.jsx'
import Button from '../Button/component.jsx'
import ButtonGroup from '../ButtonGroup/component.jsx'
import List from '../List/component.jsx'
import Longform from '../Longform/component.jsx'
import Select from '../Select/component.jsx'
import Textarea from '../Textarea/component.jsx'
import Reveal from '../Reveal/component.jsx'
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
      case 'longform':
        component = <longform {...item} key={i} />
        break
      case 'list':
        component = <List {...item} key={i} />
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
      case 'reveal':
        component = <Reveal {...item} key={i} />
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
