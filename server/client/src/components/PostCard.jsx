import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { NoProfile } from "../assets";
import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import Loading from "./Loading";
import CustomButton from "./CustomButton";
import { BiShow } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { apiRequest } from "../utils";

const getPostComments = async (id) => {
  try {
    const res = await apiRequest({
      url: "/posts/comments/" + id,
      method: "GET",
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

const CommentForm = ({ user, id, replyAt, getComments }) => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setErrMsg("");
    try {
      const URL = !replyAt
        ? "/posts/comment/" + id
        : "/posts/reply-comment/" + id;

      const newData = {
        comment: data?.comment,
        from: user?.firstName + " " + user.lastName,
        replyAt: replyAt,
      };

      const res = await apiRequest({
        url: URL,
        data: newData,
        token: user?.token,
        method: "POST",
      });

      if (res?.status === "failed") {
        setErrMsg(res);
      } else {
        reset({ comment: "" });
        setErrMsg("");
        await getComments();
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full border-b border-[#66666645]'
    >
      <div className='w-full flex items-center gap-2 py-4'>
        <img
          src={user?.profileUrl ?? NoProfile}
          alt='User Image'
          className='w-10 h-10 rounded-full object-cover'
        />
        <TextInput
          name='comment'
          styles='w-full rounded-full py-3'
          placeholder={replyAt ? `Reply @${replyAt}` : "Comment this post"}
          register={register("comment", {
            required: "Comment can not be empty",
          })}
          error={errors.comment ? errors.comment.message : ""}
        />
      </div>
      {errMsg?.message && (
        <span
          role='alert'
          className={`text-sm ${
            errMsg?.status === "failed"
              ? "text-[#f64949fe]"
              : "text-[#2ba150fe]"
          } mt-0.5`}
        >
          {errMsg?.message}
        </span>
      )}
      <div className='flex items-end justify-end pb-2'>
        {loading ? (
          <Loading />
        ) : (
          <CustomButton
            title='Submit'
            type='submit'
            containerStyles='bg-[#0444a4] text-white py-1 px-3 rounded-full font-semibold text-sm'
          />
        )}
      </div>
    </form>
  );
};
const PostCard = ({ post, user, deletePost, likePost }) => {
  const [showAll, setShowAll] = useState(0);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false); // Changed from null to false
  const postRef = useRef(null);

  const getComments = async (id) => {
    setLoading(true); // Set loading to true when fetching comments
    console.log("Fetching comments for post ID:", id); // Log the post ID for which comments are being fetched
    const result = await getPostComments(id);
    console.log("Fetched comments:", result); // Log the fetched comments
    setComments(result);
    setLoading(false); // Set loading to false after fetching comments
  };

  const handleLike = async (uri) => {
    await likePost(uri);
    getComments(post?._id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPost((prevPost) => ({
            ...prevPost,
            views: prevPost.views + 1,
          }));
          observer.unobserve(postRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (postRef.current) {
      observer.observe(postRef.current);
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current);
      }
    };
  }, []);

  const handleViewIncrement = () => {
    setPost((prevPost) => ({
      ...prevPost,
      views: prevPost.views + 1,
    }));
  };

  return (
    <div ref={postRef} className='mb-2 bg-primary p-4 rounded-xl'>
      {/* ... */}
      <p
        className='flex gap-2 items-center text-base cursor-pointer'
        onClick={() => setShowComments(!showComments)} // Toggle showComments
      >
        <BiComment size={20} />
        {post?.comments?.length}
      </p>
      {showComments && (
        <div className='w-full mt-4 border-t border-[#66666645] pt-4'>
          <CommentForm
            user={user}
            id={post?._id}
            getComments={() => getComments(post?._id)}
          />
          {loading ? (
            <Loading />
          ) : comments?.length > 0 ? (
            comments?.map((comment) => (
              <div className='w-full py-2' key={comment?._id}>
                {/* Render comment details */}
              </div>
            ))
          ) : (
            <span className='flex text-sm py-4 text-ascent-2 text-center'>
              No Comments, be the first to comment
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default PostCard;
