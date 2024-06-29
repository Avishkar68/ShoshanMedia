import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../app/alertSlice";
import axios from "axios";
import Modal from "./Modal"; // Adjust the path as needed

const Post = ({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  ownerImage,
  ownerName,
  ownerId,
  isDelete = false,
  isAccount = false,
}) => {
  const dispatch = useDispatch();
  const [likesCount, setLikesCount] = useState(likes.length || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(`/api/v1/post/${postId}`);
      dispatch(hideLoading());

      if (response.data.success) {
        setLikesCount((prevLikesCount) =>
          hasLiked ? prevLikesCount - 1 : prevLikesCount + 1
        );
        setHasLiked(!hasLiked);
        console.log(response.data.message);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error("Something went wrong:", error.message);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="lg:max-w-[540px] border flex flex-col justify-between border-gray-500 h-[70vh] rounded-lg overflow-hidden">
        <div className="lg:w-[540px] border-b border-gray-500">
          <div className="flex items-center m-2">
            <img
              className="w-10 h-10 rounded-full"
              src={ownerImage}
              alt={ownerName}
            />
            <div className="ml-3">
              <h3 className="text-lg font-medium">{ownerName}</h3>
              <p className="text-sm text-gray-600">@{ownerId}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-gray-500 h-[360px]">
          <img className="h-full" src={postImage} alt="Post" />
        </div>

        <div className="ml-2">{caption}</div>
        <div className="ml-2 cursor-pointer" onClick={openModal}>
          {likesCount} likes
        </div>
        <div className="h-[86px] mt-[-10px] p-4 flex gap-10 items-center justify-between text-lg font-sans">
          <div className="flex gap-4">
            <button onClick={handleLike}>
              {hasLiked ? "Unlike" : "Like"}
            </button>
            <button>Comment</button>
          </div>
          {isDelete && isAccount ? <button>Delete</button> : null}
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} likes={likes} />
    </>
  );
};

export default Post;
