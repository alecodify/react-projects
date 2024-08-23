import React from 'react'
import { Layout, LayoutIllustration } from '../layout'
import { Features, Hero, NewsLetter, Testimoninals, Zigzag } from '../components'

const Home = () => {
  return (
    <Layout>
      <LayoutIllustration>
        <Hero />
        <Features />
        <Zigzag />
        <Testimoninals />
        <NewsLetter />
      </LayoutIllustration>
    </Layout>
  )
}

export default Home