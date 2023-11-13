import React from 'react'
import SecondHeader from './SecondHeader'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Others = () => {
  return (
    <div>
      <SecondHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Others
