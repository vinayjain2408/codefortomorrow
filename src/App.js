import React from 'react'
import{ BrowserRouter ,Route, Routes } from "react-router-dom"
import Home from './Component/Home'
import Header from './Component/Header'
function App() {
  return (
    <>
    {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
