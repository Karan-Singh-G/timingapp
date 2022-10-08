import axios from 'axios'
import React, { useEffect,useState } from 'react'

const Dashboard = () => {
    let [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://git.heroku.com/data-server12.git`)
        .then((r)=>console.log(r.data))
    })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard