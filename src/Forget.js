import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import './Forget.css'
import { TextField ,Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import {ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const Forget = () => {
    const btnstyle={margin:'10px 0',width:"25rem"}



const history = useNavigate();

const [inpval, setInpval] = useState({
  email: "",

});

const [data, setData] = useState([]);
console.log(inpval.email);

const getdata = (e) => {
   console.log(e.target.value);

  const { value, name } = e.target;
   console.log(value);

  setInpval(() => {
    return {
      ...inpval,
      [name]: value,
    };
  });
};

const addData = (e) => {
  e.preventDefault();

  const getuserArr = localStorage.getItem("userpiyush");
  console.log(getuserArr);

  const { email, password } = inpval;
  if (email === "") {
    toast.error("email field is required", {
      position: "top-center",
    });
  } else if (!email.includes("@")) {
    toast.error("plz enter valid email address", {
      position: "top-center",
    });
   }  else {
    if (getuserArr && getuserArr.length) {
      const userdata = JSON.parse(getuserArr);
      const userlogin = userdata.filter((el, k) => {
        return el.email === email 
      });

      if (userlogin.length === 0) {
        alert("invalid details");
      } else {
        console.log("Email match succesfulyy");

        localStorage.setItem("user_login", JSON.stringify(userlogin));
       alert('Email successfully match')
        history("/request");
      }
    }
  }
};



  return (
    <div className='forget'>
      <h1>Forget your passward?</h1>
     <div className='mytext' > <b>please enter the email address associated with your account and we'll email you a link to reset your passward</b></div>
      <div>
        <TextField
          type='email'
          id="text"
          label=""
         
         placeholder='Email address'
         onChange={getdata}
         name='email'
        />

      </div>
      <div className='btn' >
      <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={addData} >Reset passward</Button></div>
    <div>

    <NavLink to='/' style={{textDecoration:'none',fontWeight:'bold'}} >Back</NavLink>
    </div>
    <ToastContainer/>
    </div>
  )
}

export default Forget
