
import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Categories from './components/Categories'
import Products from './components/Products'

function App() {
 

  return (
    <>
     <Header/>
    <Products/>
    <Categories/>
    </>
  )
}

export default App
