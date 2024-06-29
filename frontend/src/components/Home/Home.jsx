import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../Post/Post";
import "./Home.css";
import { hideLoading, showLoading } from "../../app/alertSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { setPostOfFollowing } from "../../app/userSlice";

const Home = () => {
  const posts = useSelector((state) => state.user.postOfFollowing); // Get posts from store
  const postsRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const gettingPosts = async () => {
      try {
        dispatch(showLoading());
        const response = await axios.get("/api/v1/posts");
        dispatch(hideLoading());

        if (response.data.success) {
          dispatch(setPostOfFollowing(response.data.posts));
        } else {
          toast.error("Please follow someone first for post");
        }
      } catch (error) {
        dispatch(hideLoading());
        toast.error("Something went wrong");
      }
    };

    gettingPosts();
  }, [dispatch]);

  const isDelete = false
  const isAccount = false

  return (
    <div className="w-full h-full p-4 overflow-y-hidden flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Le memes dekh le</h2>
      <div
        ref={postsRef}
        className="flex gap-6 items-center overflow-x-auto hide-scrollbar"
      >
        {posts && posts.map((post) => (
          <Post
            key={post._id}
            postId={post._id}
            caption={post.caption}
            postImage={post.image.url}
            likes={post.likes.length}
            comments={post.comments.length}
            ownerImage={post.owner.avatar}
            ownerName={post.owner.name}
            ownerId={post.owner._id}
            isAccount={isAccount ? true : false}
            isDelete={isDelete ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
