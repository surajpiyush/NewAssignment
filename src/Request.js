import React from 'react'
import './Request.css';
import {  useNavigate} from 'react-router-dom'
import { TextField,Typography ,Button,Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
const Request = () => {

const navigate=useNavigate()
  
  

    const btnstyle={margin:'10px 0',width:"25rem"}
 
  return (
    <div className='request'>
      <h1>Request sent successfully!</h1>
     <div className='myrequest' > <b>We've sent 6-digit confirmation email to your email.Please enter the code in below box to verify your email</b></div>
      <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    > <br/>
      <TextField
          
          id="outlined-error"
          label="Email address"
          defaultValue=""
          placeholder='Enter your email'
          
        /><br/>
        <TextField
          
          id="outlined-error-helper-text"
          label=""
          defaultValue=""
         placeholder='passward'
        /><br/>
        <TextField
          
          id="outlined-error-helper-text"
          label=""
          defaultValue=""
         placeholder=' Confirm New Passward'
        />
  </Box>
      </div>
      <div className='btn' >
      <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth  onClick={()=>navigate('/success')} >Change passward</Button></div>
   
    <Typography > Don't have a code ? <span></span>
                     <NavLink href="#" style={{textDecoration:'none',fontWeight:'600'}} >
                        Resend code 
                </NavLink>
                </Typography>
    </div>
  )
}

export default Request
