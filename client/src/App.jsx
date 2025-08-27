import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { Navbar } from './Component/Navbar'
import Home from "./Pages/Home"
import AddRecord from "./Pages/AddRecord"
import Register from "./Pages/Register"
import AllStudRecord from './Pages/AllStudRecord'
import EditRecord from './Pages/EditRecord'
import Login from './Pages/Login'

function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddRecord />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/records' element={<AllStudRecord />} />
          <Route path="/update/:id" element={<EditRecord />} />


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
