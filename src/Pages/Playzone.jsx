import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Keyboard from '../components/Keyboard/Keyboard'
import Timer from '../components/Timer'
 import  {getword} from "../Redux/action"
const Playzone = () => {
    const dispatch=useDispatch()
    const name=useSelector((state)=>state.name);
    const level=useSelector((state)=>state.level)
     const word=useSelector((state)=>state.word)
     const score=useSelector((state)=>state.score)
  
     const [starttimer,setStarttimer]=useState(true);
  useEffect(()=>{
   dispatch(getword())
  },[])
  

  return (
     <>
       <h2> target:{word}</h2>

       <h2>Score :{score}</h2>
     
    <Link to="/Dashboard" style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>Dashboard</Link>
       
     <Keyboard  word={word}/>
     </>
  )
}

export default Playzone