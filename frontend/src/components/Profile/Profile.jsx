import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { hideLoading, showLoading } from "../../app/alertSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user);
  console.log(userData);

  const logoutUser = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/v1/logout");
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success("User logged out");
        navigate("/login");
        window.location.reload(); // Reload the page after navigating to login
      } else {
        toast.error("Unable to logout");
        console.log("Error on logout");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
      console.error("Error during logout:", error.message);
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s" alt="Profile" />
      </div>
      <div>Username: {userData.name}</div>
      <div>Email: {userData.email}</div>
      <div>Followers: {userData.followers ? userData.followers.length : 0}</div>
      <div>Following: {userData.following ? userData.following.length : 0}</div>
      <button onClick={logoutUser}>Logout</button>
      <div>
        {userData.posts && userData.posts.length !== 0 ? (
          userData.posts.map((post) => (
            <Post
              key={post._id}
              postId={post._id}
              caption={post.caption}
              likes={post.likes ? post.likes.length : 0}
              comments={post.comments ? post.comments.length : 0}
              ownerImage={userData.avatar ? userData.avatar.url : ""}
              ownerName={userData.name}
              ownerId={userData._id}
              isAccount={true}
              isDelete={true}
            />
          ))
        ) : (
          <div>Create a post first</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
