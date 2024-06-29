import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginForm from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "./app/alertSlice";
import axios from "axios";
import { setUser , setAuthenticated } from "./app/userSlice";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import NewPost from "./components/NewPost/NewPost";
import Post from "./components/Post/Post";
function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state)=>state.user.isAuthenticated)

  useEffect(()=>{
    const fetchUserData = async () => {
      try {
        dispatch(showLoading());
        const response = await axios.get("/api/v1/me");
        dispatch(hideLoading());

        if (response.data.success) {
          dispatch(setUser(response.data.user));
          dispatch(setAuthenticated(true));
        } else {
          toast.error("User logged out");
        }
      } catch (error) {
        dispatch(hideLoading());
        toast.error("Something went wrong");
      }
    };

    fetchUserData();
  },[dispatch])

  return (
    <>
      <Router>
        {isAuthenticated && <Header />} 
        <Routes>
          <Route path="/" element={
            isAuthenticated ? <Home /> : <LoginForm/>
            } />
          <Route path="/login" element={
             <LoginForm/>
            } />
           <Route path="/profile" element={
            isAuthenticated ? <Profile /> : <LoginForm/>
            } />
           <Route path="/search" element={
            isAuthenticated ? <Search /> : <LoginForm/>
            } />
           <Route path="/newPost" element={
            isAuthenticated ? <NewPost /> : <LoginForm/>
            } />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
