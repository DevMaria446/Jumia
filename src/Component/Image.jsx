import React, {useState} from 'react'
import './Image.css'
const Image=()=>{
   
 const [data,setData]=useState(0);
 const [imageSlide,setImageSlide]=useState([
    'image4.gif',
    'image5.png',
    'image6.png',
    'image7.jpg',
    'image8.jpg',
    'image10.jpg',
    'image11.jpg'
 ])

 const add=()=>{
    setData(data + 1)
 }
const sub=()=>{
    if(data > 0){
        setData(data - 1)
    }

    else{
        setData(0)
    }
}
    return(
       <div className='main-container'> 
          
               <img className='ba'src={imageSlide [data % imageSlide.length]} alt=''/>
               <button  className='mama' onClick = {add} >+</button>
            <button className='mam' onClick = {sub}>-</button>
        </div>
        )
}
export default Image