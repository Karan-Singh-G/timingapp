import React from 'react'
import {Routes,Route, } from "react-router-dom"

import Dashboard from './Dashboard'
import Formpage from './Formpage'
import Playzone from './Playzone'


const Mainroutes = () => {
  return (
   <Routes>
    <Route path='/'  element={<Formpage/>}/>
    <Route path='/playzone'  element={<Playzone/>}/>
    <Route path='/Dashboard'  element={<Dashboard/>}/>
   </Routes>
  )
}

export default Mainroutes