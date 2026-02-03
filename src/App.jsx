import React from 'react'
import AppRouter from './components/common/AppRouter'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="min-h-[calc(100vh-200px)]">
        <AppRouter />
      </main>

      <Footer />
    </div>
  )
}

export default App