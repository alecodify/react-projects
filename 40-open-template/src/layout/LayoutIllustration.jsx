import React from 'react'
import { Footer, Illustration } from '../components'

const LayoutIllustration = ({ children }) => {
  return (
    <div>
        <Illustration />
        <main className='grow'>{children}</main>
        <Footer />
    </div>
  )
}

export default LayoutIllustration