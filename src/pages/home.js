import React from 'react'
import { Feature, OptForm } from '../components'
import { FaqsContainer } from '../containers/faqs'
import { FooterConatiner } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { JumbotronContainer } from '../containers/jumbotron'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited Films, TV Programs and more.</Feature.Title>
          <Feature.SubTitle>Watch Anywhere. Cancel anytime</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to Watch ? Enter your email to create or restart your
              membership
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder='Enter your email here' />
            <OptForm.Button>Try It Now</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterConatiner />
    </>
  )
}
