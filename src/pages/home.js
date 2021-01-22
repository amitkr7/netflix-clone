import React from 'react'
import { FaqsContainer } from '../containers/faqs'
import { FooterConatiner } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterConatiner />
    </>
  )
}
