// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Articles from "./components/Articles.jsx"
import Details from "./components/Details.jsx"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"

function App() {
  return (
    <>
        <Header></Header>
        <Home></Home>
        <Login></Login>
        <Register></Register>
        <Articles></Articles>
        <Details></Details>
    </>
  )
}

export default App