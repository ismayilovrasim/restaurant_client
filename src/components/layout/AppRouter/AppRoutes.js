// import {Routes, Route} from 'react-router-dom'
import React from 'react'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Menu from '../../pages/Menu/Menu'
import WhyUs from '../../elements/whyUs/whyUs'



const AppRoutes = () => {
  return (
    <>
      <About/>
      <Menu/>
      <WhyUs/>
      <Contact/>
    </>
  )
}

export default AppRoutes