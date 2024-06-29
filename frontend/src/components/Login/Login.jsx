import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {useDispatch} from "react-redux"
import { toast } from "react-toastify"
import { hideLoading, showLoading } from '../../app/alertSlice';
import axios from "axios"
import {  setAuthenticated, setUser } from '../../app/userSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      dispatch(showLoading())
      const response = await axios.post("/api/v1/login",{email,password})
      dispatch(hideLoading())

      if(response.data.success){
        toast.success("Login successfully")
        dispatch(setUser(response.data.user))
        dispatch(setAuthenticated(true))
        navigate("/")
      }else{
        toast.error("failed");
      }
    } catch (error) {
      dispatch(hideLoading())
      toast.error("Something went wrong")
    }

  };

  return (
    <div >
      <form onSubmit={handleSubmit} >
        <div >
          <input
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div >
          <input
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
