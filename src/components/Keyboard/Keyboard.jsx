import React, {useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Timer from '../Timer'
import "./Keyboard.css"

const Keyboard = ({word}) => {
     let [key,setKey]=useState("")
     let [sentence,setSentence]=useState([])
     let [textarea,setTextarea]=useState("")
     let [alphabet,setAlphabet]=useState(true);
    let  level=useSelector((store)=>store.level)
    const handleshow=(e)=>{
         
        let value= e.target.innerText
        console.log(value)
        if(alphabet){
          
            if(value==="Backspace"){
                console.log(sentence)
                sentence.pop();
              let a=sentence
               setSentence(a)
               setKey(Math.random());
           }
          else{
          
           
            let sent=[...sentence,value]
            setSentence(sent)
            setKey(value);
           }
        }else{
            if(value==="Backspace"){
                console.log(sentence)
                sentence.pop();
              let a=sentence
               setSentence(a)
               setKey(Math.random());
           }else{
            let b=value.toLowerCase()
           
            let sent=[...sentence,b]
            setSentence(sent)
            setKey(value);
           }
         
        }
     
       
      

 
        
    }
    useEffect(()=>{
         let z=sentence.join("")
         if(z===word){
          
         }
setTextarea(z)
    },[sentence,key,handleshow])
   console.log(level)
  return (
    <div className="container">
  <Timer level={level}  sentenc={sentence} word={word}/>
   
    <div className="keyboard_wrapp">
       
        <div className="keyboard_keys">
            <div className="row">
                <div    onClick={handleshow}className="keys">`</div>
                <div  onClick={handleshow}  value={"1"}className="keys">1</div>
                <div  onClick={handleshow} className="keys">2</div>
                <div     onClick={handleshow} className="keys">3</div>
                <div  onClick={handleshow} className="keys">4</div>
                <div  onClick={handleshow} className="keys">5</div>
                <div  onClick={handleshow} className="keys">6</div>
                <div  onClick={handleshow} className="keys">7</div>
                <div  onClick={handleshow} className="keys">8</div>
                <div  onClick={handleshow} className="keys">9</div>
                <div  onClick={handleshow} className="keys">0</div>
                <div  onClick={handleshow} className="keys">-</div>
                <div  onClick={handleshow} className="keys">=</div>
                <div  onClick={handleshow} className="keys backspace_key"   >Backspace</div>
            </div>
            <div className="row">
                <div   onClick={handleshow}className="keys tab_key">Tab</div>
                <div  onClick={handleshow} className="keys">Q</div>
                <div  onClick={handleshow} className="keys">W</div>
                <div   onClick={handleshow}className="keys">E</div>
                <div   onClick={handleshow}className="keys">R</div>
                <div   onClick={handleshow} className="keys">T</div>
                <div  onClick={handleshow} className="keys">Y</div>
                <div  onClick={handleshow} className="keys">U</div>
                <div onClick={handleshow} className="keys">I</div>
                <div  onClick={handleshow}className="keys">O</div>
                <div onClick={handleshow} className="keys">P</div>
                {/* curly brace are not coming  */}
                <div onClick={handleshow} className="keys"></div>
                <div  onClick={handleshow}className="keys"></div>
                <div  onClick={handleshow}className="keys slash_key">\</div>
            </div>
            <div  className="row">
                <div onClick={()=>setAlphabet(!alphabet)} className="keys caps_lock_key" >Caps Lock</div>
                <div onClick={handleshow} className="keys">A</div>
                <div  onClick={handleshow}className="keys">S</div>
                <div  onClick={handleshow}className="keys">D</div>
                <div onClick={handleshow} className="keys">F</div>
                <div onClick={handleshow} className="keys">G</div>
                <div onClick={handleshow} className="keys">H</div>
                <div  onClick={handleshow}className="keys">J</div>
                <div  onClick={handleshow}className="keys">K</div>
                <div  onClick={handleshow}className="keys">L</div>
                <div onClick={handleshow} className="keys">;</div>
                <div  onClick={handleshow}className="keys">"</div>
                <div  onClick={handleshow}className="keys enter_key">Enter</div>
            </div>
            <div className="row">
                <div  onClick={handleshow}className="keys shift_key shift_left">Shift</div>
                <div onClick={handleshow} className="keys">Z</div>
                <div onClick={handleshow} className="keys">X</div>
                <div onClick={handleshow} className="keys">C</div>
                <div onClick={handleshow} className="keys">V</div>
                <div  onClick={handleshow}className="keys">B</div>
                <div onClick={handleshow} className="keys">N</div>
                <div  onClick={handleshow}className="keys">M</div>
     {/* greater and smaller sign are not coming  */}
                <div onClick={handleshow} className="keys"></div>
                <div  onClick={handleshow}className="keys"></div>
                <div onClick={handleshow} className="keys">/</div>
                <div  onClick={handleshow}className="keys">?</div>
                <div onClick={handleshow} className="keys shift_key shift_right">Shift</div>
            </div>
            <div className="row">
                <div  onClick={handleshow}className="keys ctrl_key ctrl_left">Ctrl</div>
                <div  onClick={handleshow}className="keys win_key">Win</div>
                <div  onClick={handleshow}className="keys alt_key alt_left">Alt</div>
                <div onClick={handleshow} className="keys space_key"></div>
                <div  onClick={handleshow}className="keys alt_key alt_right">Alt</div>
                <div  onClick={handleshow}className="keys">Fn</div>
                <div  onClick={handleshow}className="keys ctrl_key ctrl_right">Ctrl</div>
            </div>
        </div>
    </div>
    <input value={textarea} onChange={()=>setTextarea(key)} className="text" type="text"/>
</div>
 )
}

export default Keyboard