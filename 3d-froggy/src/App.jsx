import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import MainPage from './components/MainPage'
import ThankYou from './components/ThankYou'

function App() {

  return (
  <Routes>
    <Route path='/' element={<ThankYou/>}/>
    <Route path='/present' element={<MainPage/>}/>
  </Routes>
  )
}

export default App
