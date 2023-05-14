import React from 'react'
import HeaderComponent from './HeaderComponent'
import Footer from './Footer'
import Component1 from './Component1'
import Component2 from './Component2'

export default function App() {
  return (
    <div>
      <h1>My React Basics App</h1>
      <HeaderComponent salutation={'Mr.'} name={'Jagan'} role={['Student','Guest']}/>
      <Component1 />
      <Component2 />
      <Footer />
    </div>
  )
}
