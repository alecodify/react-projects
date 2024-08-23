import React from 'react'
import { Banner, Header } from '../components'

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        <div className='pt-24'>{children}</div>
        <Banner />
    </div>
  )
}

export default Layout