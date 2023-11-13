import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rhythm from './components/Rhythm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header */}
    {/*  <Products/>*/}
    {/*  <Categories/>*/}
    <Rhythm/>
    </>
  )
}

export default App
