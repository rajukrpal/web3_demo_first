import React from 'react'
import { Navbar, Footer, Loader, Servise, Transection, Welcome } from './components'

function App() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <div>
        <Servise />
        <Transection />
        <Footer />
      </div>
    </div>
  )
}

export default App
