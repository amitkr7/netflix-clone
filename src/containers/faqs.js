import React from 'react'
import { Accordion, OptForm } from '../components'
import faqsData from '../fixtures/faqs.json'

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Text>
          Ready to Watch ? Enter your email to create or restart your membership
        </OptForm.Text>
        <OptForm.Input placeholder='Enter your email here' />
        <OptForm.Button>Try It Now</OptForm.Button>
        <OptForm.Break />
      </OptForm>
    </Accordion>
  )
}
