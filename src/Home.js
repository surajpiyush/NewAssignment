import React,{useState} from 'react';
import Box from '@mui/material/Box';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import './Home.css';
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import {  Button, Link } from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Home() {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  //console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
     console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { email,  password } = inpval;
  console.log('passward',password )
     if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
   
      } else if (password === "") {
       toast.error("password field is requred", {
         position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length should greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/login");
      localStorage.setItem("userpiyush", JSON.stringify([...data, inpval]));
    }
  };


    const btnstyle={margin:'10px 0',width:"25rem"}
  return (
    <div className="form-container">
        <h2> Sign in</h2>
        <b>Enter your details below</b>
    <div className='mycontainer' >
        
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          type='email'
          id="outlined-error"
          label="Email address"
          defaultValue=""
          placeholder='Enter your email'
          name='email'
          onChange={getdata}
        />
        </div>
        <div>
        <TextField
          onChange={getdata}
          id="outlined-error-helper-text"
          label=""
      
         placeholder='passward'
         type='password'
         name='password'
        />
      </div>
      <div className='check' >
      <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                 <div className='link'>
                 
                     <Link href='/forget' >
                        Forgot password ?
                </Link>
                
                </div>
                 </div>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={addData} >log in</Button>
               
               <h4><b>-------------------------OR------------------------</b></h4>
           <Link to='#'><h1> <FcGoogle/></h1> </Link>

      
    </Box>
    <ToastContainer/>
    </div>
    </div>
  );
}