import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Table/>
      <Footer/>
      

    </>
  )
}

export default App
