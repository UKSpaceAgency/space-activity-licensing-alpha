import React from 'react'
import classNames from 'classnames'
import Longform from '../Longform/component.jsx'
import Heading from '../Heading/component.jsx'
import Divider from '../Divider/component.jsx'
import List from '../List/component.jsx'
import CommentModule from '../CommentModule/component.jsx'
import TabPanel from '../TabPanel/component.jsx'
import Tablist from '../Tablist/component.jsx'
import Tab from '../Tab/component.jsx'
import Accordion from '../Accordion/component.jsx'
import AccordionSection from '../AccordionSection/component.jsx'
import Textarea from '../Textarea/component.jsx'
import FileUpload from '../FileUpload/component.jsx'
import RadioCheck from '../RadioCheck/component.jsx'
import Grid from '../Grid/component.jsx'
import GridCol from '../GridCol/component.jsx'
import Tags from '../Tags/component.jsx'

const ContentRepeater = props => {
  let classes = classNames(props.className, props.modifiers)
  let tabs = props.commentBlock && props.commentBlock.tabs ? <div className='comment-wrapper'>{props.commentBlock.heading && <Heading {...props.commentBlock.heading}/>}<Tablist>{props.commentBlock.tabs.map((v, i) => <Tab key={i} id={v.id} newComment={v.newComment || null}>{v.label}</Tab>)}</Tablist>{props.commentBlock.tabs.map((v, i) => <TabPanel key={i} id={v.id}>{v.commentBlock && <CommentModule id={v.id} {...v.commentBlock}/>}</TabPanel>)}</div> : null
  // @todo @refactor - this is a bit loooong - pare this back a little
  let collapsible = props.commentBlock && props.commentBlock.collapsible && props.commentBlock.tabs ? (<Accordion><AccordionSection heading={props.commentBlock.collapsibleHeading || ''}>{tabs}</AccordionSection></Accordion>) : tabs

  return (
    <section className={classes} id={props.permalink}>
      {props.title && <Heading {...props.title}/>}
      <div className={props.transparent ? null : 'comment-answer'}>
        <Longform {...props}/>
        {props.condition && <Textarea {...props.condition}/>}
        {props.supporting && <Longform {...props.supporting}/>}
        {props.textarea && <Textarea {...props.textarea}/>}
        {props.booleans && <RadioCheck {...props.booleans}/>}
        {props.attachment && <FileUpload {...props.attachment}/>}
        <Grid>{props.documents && <GridCol className='column-half'>{props.heading && <Heading {...props.heading}/>}<List list={props.documents} /></GridCol>}{props.references && <GridCol className='column-half align-right'><Heading {...props.references.heading}/><Heading {...props.references.link}/>{props.references.tags && <Tags tags={props.references.tags}/>}</GridCol>}</Grid>
        {collapsible}
      </div>
      {props.backbutton && <div className='text'><a href='#' className='link-back'>Back to top</a></div>}
      {props.divider && <Divider />}
    </section>
  )
}

export default ContentRepeater
