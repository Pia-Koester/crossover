
import { useState } from 'react'
import Header from './components/Header'
import './App.css'

import Categories from './components/Categories'
import Products from './components/Products'
import Brands from './components/Brands.jsx'


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
