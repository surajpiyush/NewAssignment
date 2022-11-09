import React from 'react'
import { Button } from '@material-ui/core'
import { useNavigate} from 'react-router-dom'
import './Success.css'
const Success = () => {
  const navigate=useNavigate();
    const btnstyle={margin:'10px 0',width:"25rem"}
  return (
    <div className='mysuccess' >
      <h1>Passward changed successfully!</h1>
      <div className='btn' >
      <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={()=>{navigate('/')}} >Go to Homepage</Button></div>
    </div>
  )
}

export default Success
