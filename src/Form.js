import React, { useState } from 'react';
import './style.css';
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import VpnKeySharpIcon from '@mui/icons-material/VpnKeySharp';
import { Link,useNavigate } from 'react-router-dom';  
import axios from 'axios';
const Form =()=> {
    const nav=useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
       axios.get(`http://localhost:3001/posts?email=${email}&password=${password}`)
       .then(res=>{
        if(res.data.length > 0){
            alert("Logged in successfully")
            // Navigate("/Hom")
        }
        else{
            alert("Invalid Email or Password")
        }
       })
       .catch(err=>{console.log(err)})
    }
    return (
        
        <>
        <div className='bod'>

            <div className='t'>
            <span1>FAD</span1><br/><span2>Taste With Pleasure... <RestaurantSharpIcon fontSize='larger'/></span2>
            </div>

            <form onSubmit={()=>{nav('/Hom')}}>
        <div className="t1">
            <h2>Log In</h2>
            <PersonSharpIcon fontSize='large'/><TextField id="standard-basic"  className='t3' label="e-mail" type="emai" value={email} variant="outlined" onChange={(event)=>{setEmail(event.target.value)}} color='secondary' required/><br/><br/>
            <VpnKeySharpIcon    fontSize='large'/><TextField id="standard-basic" className='t3' label="Password" type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} variant="outlined" color='secondary'required/><br/><br/>
            <div className='t4'>
            <Button variant="contained" color='info' type='submit' onClick={handleSubmit} >Log In</Button>
            <Link to="/Sign"><Button variant="filled" color='info' type='submit'>Sign Up</Button></Link>
            </div>
        </div>
           </form>

        </div>
        </>
    )
}
export default Form