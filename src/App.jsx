import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Brands from './components/Brands.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header */}
    {/*  <Products/>*/}
    {/*  <Categories/>*/}
    <Brands/>

    </>
  )
}

export default App
