
import React, {useState} from "react"
import { Justify } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import {BASE_URL} from '../../config/config'

export default function (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (event) => {
    // Update state based on form input changes
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };
  const navigate =useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Prepare the payload for the API call
    const payload = {
      email: email,
      password: password,
    };

    // Make the API call to /login using fetch
    const response = await fetch(BASE_URL+'api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
        if (response.status===200) {
          let res = await response.json();
          localStorage.setItem("user",JSON.stringify(res))
          if(res?.user.role==='admin'){
            window.location.href = '/admin/list'
          } else{
            window.location.href='/'
          }
            toast.success("Logged In Successfully")
            
        } else if (response.status===401){
          let res = await response.json();
          console.log(res)
          toast.warning(res.message)
        }
        else{
          toast.error("internal server error")
        }

  };
  return (
    <div className="Auth-form-container " style={{background:"#233a8c", marginTop:"-50px"}}>
      <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            name="email"
            value={email}
            placeholder="Enter email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            name="password"
            value={password}
            placeholder="Enter password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          {/* Forgot <a href="#">password?</a> */}
        </p>
      </div>
    </form>
    </div>
  )
}