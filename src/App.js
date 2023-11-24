import React from 'react'
import {Brand,CTA,Navbar} from './components'
import {Blog,Features,Footer,Possibility,WhatGPT3,Header} from './container'
import './App.css'
const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App