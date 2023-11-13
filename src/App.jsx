

import { useState } from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import Products from './components/Products'
import Brands from './components/Brands.jsx'
import './App.css'
import MainBottomFooter from "./components/Footer/Index"

function App() {


  return (
    <>
    <Header />
    <Products/>
    <Categories/>
    <Brands/>
    <MainBottomFooter />
    </>
  )
}

export default App
