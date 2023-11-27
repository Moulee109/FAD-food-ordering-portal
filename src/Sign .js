import React,{useState} from 'react'
import './style.css';
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import {useNavigate } from 'react-router-dom';  
import axios from 'axios';
const Sign =()=> {
  const nav=useNavigate()
  const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
       axios.post(`http://localhost:3001/posts`,{
        
        email,password
       })
       .then(res=>{console.log(res)})
       .catch(err=>{console.log(err)})
        nav("/Hom")
      }
  return (
    <div className='bod'>
         
         <div className='t'>
            <span1>FAD</span1><br/><span2>Taste With Pleasure... <RestaurantSharpIcon fontSize='larger'/></span2>
          </div>

        <form onSubmit={()=>{nav('/Form')}}>
        <div className='t1'>
       <h2>Sign Up</h2><br/>
            <TextField className='t3' label="UserName" variant="filled" color='secondary' required /><br/>
            <TextField className='t3' label="Mobile Number" variant="filled" type='text' color='secondary' required/><br/>
            <TextField className='t3' label="E-mail" variant="filled" type='email' value={email} onChange={(event)=>{setEmail(event.target.value)}} color='secondary'required/><br/>
            <TextField className='t3' label="Password" variant="filled" type='password'value={password} onChange={(event)=>{setPassword(event.target.value)}} color='secondary'required/><br/>
            <Button variant="contained" color='info' type='submit' onClick={handleSubmit}>Get In</Button>
            </div>
            </form>
    </div>
  )
}
export default Sign;
