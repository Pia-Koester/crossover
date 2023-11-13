
import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Brands from './components/Brands.jsx'
import Categories from './components/Categories'
import Products from './components/Products'

function App() {
 

  return (
    <>
     <Header/>
    <Products/>
    <Categories/>
    <Brands/>

    </>
  )
}

export default App
