import React from 'react'
import AppRouter from './components/common/AppRouter'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <div className='bg-gray-100'>
      <Header/>
      <div className='min-h-125'>
        <AppRouter/>
       
      </div>
       <Footer/>
    </div>
  )
}

export default App