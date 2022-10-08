import React, { useEffect ,useState} from 'react'

const Timer = ({sentence,word,level}) => {
    const [time,setTime]=useState(0);
    const [timer,setTimer]=useState(true);
    useEffect(()=>{
     
     let intervalid=null;
     if(timer){
  intervalid=setInterval(()=>{
   setTime((prev=>prev+=1))
  },1000)
     }
     

    },[timer])
  
  return (
    <div>Time:{time}</div>
  )
}

export default Timer