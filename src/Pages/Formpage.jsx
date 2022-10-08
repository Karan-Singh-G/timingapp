import React from 'react'
import "./Formpage.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {getNameSuccess,getLevelSuccess} from "../Redux/action"

const Formpage = () => {
  const dispatch=useDispatch()

  let navigate=useNavigate()
  const [level,setLevel]=useState(0)
  const [name,setName]=useState("")
  const handleaddform=()=>{
     dispatch(getNameSuccess(name))
     dispatch(getLevelSuccess(level))
      navigate("/Playzone")
  }
  return (
    
   <div  className='maincontainer'>
    <h1>Play the Game</h1>
     <div className='form'>
      <div>  <label >Name : </label>
        <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='name' /></div>
    <div>
    <label>Difficulty level:</label>

<select value={level}  onChange={e=>setLevel(e.target.value)} >
<option value="">select</option>
<option value="40">easy</option>
<option value="30">medium</option>
<option value="10">difficult</option>
 </select>
    </div>
       <div>
       <button onClick={handleaddform}>submit</button>
       </div>
    
    </div>
   </div>
  )
}

export default Formpage