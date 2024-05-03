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
      url: `/comments/${id}`, // Correctly construct the URL
      method: "GET",
    });
    console.log("Response:", res); // Log the response
    return res?.data;
  } catch (error) {
    console.log("Error fetching comments:", error); // Log any errors
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
    const result = await getPostComments(id);
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
      <div className='flex gap-3 items-center mb-2'>
        <Link to={"/profile/" + post?.userId?._id}>
          <img
            src={post?.userId?.profileUrl ?? NoProfile}
            alt={post?.userId?.firstName}
            className='w-14 h-14 object-cover rounded-full'
          />
        </Link>
        <Link to={"/post/" + post?._id} onClick={handleViewIncrement}>
          <p className='font-medium text-lg text-ascent-1'>{post?.title}</p>
        </Link>
        <div className='w-full flex justify-between'>
          <div>
            <Link to={"/profile/" + post?.userId?._id}>
              <p className='font-medium text-lg text-ascent-1'>
                {post?.userId?.firstName} {post?.userId?.lastName}
              </p>
            </Link>
            <span className='text-ascent-2'>{post?.userId?.location}</span>
          </div>
          <span className='text-ascent-2'>
            {moment(post?.createdAt ?? "2023-05-25").fromNow()}
          </span>
        </div>
      </div>
      <div onClick={handleViewIncrement} className='post-content'>
        <p className='text-ascent-2'>
          {showAll === post?._id
            ? post?.description
            : post?.description.slice(0, 300)}
          {post?.description?.length > 301 &&
            (showAll === post?._id ? (
              <span
                className='text-blue ml-2 font-medium cursor-pointer'
                onClick={() => setShowAll(0)}
              >
                Show Less
              </span>
            ) : (
              <span
                className='text-blue ml-2 font-medium cursor-pointer'
                onClick={() => setShowAll(post?._id)}
              >
                Show More
              </span>
            ))}
        </p>
        {post?.image && (
          <img
            src={post?.image}
            alt='post image'
            className='w-full mt-2 rounded-lg'
          />
        )}
      </div>
      <div className='mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]'>
        <p
          className='flex gap-2 items-center text-base cursor-pointer'
          onClick={() => handleLike("/posts/like/" + post?._id)}
        >
          {post?.likes?.includes(user?._id) ? (
            <BiSolidLike size={20} color='blue' />
          ) : (
            <BiLike size={20} />
          )}
          {post?.likes?.length}
        </p>
        <div className='flex gap-2 items-center text-base cursor-pointer'>
          <BiShow size={20} />
          {post?.views} Views
        </div>
        <p className='flex gap-2 items-center text-base cursor-pointer'>
          <CiShare2 size={20} />
          Share
        </p>
        <p
          className='flex gap-2 items-center text-base cursor-pointer'
          onClick={() => setShowComments(!showComments)} // Toggle showComments
        >
          <BiComment size={20} />
          {post?.comments?.length}
        </p>
        {user?._id === post?.userId?._id && (
          <div
            className='flex gap-1 items-center text-base text-ascent-1 cursor-pointer'
            onClick={() => deletePost(post?._id)}
          >
            <MdOutlineDeleteOutline size={20} />
            <span>Delete</span>
          </div>
        )}
      </div>
      {showComments && ( // Display comments if showComments is true
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
                <div className='flex gap-3 items-center mb-1'>
                  <Link to={"/profile/" + comment?.userId?._id}>
                    <img
                      src={comment?.userId?.profileUrl ?? NoProfile}
                      alt={comment?.userId?.firstName}
                      className='w-10 h-10 rounded-full object-cover'
                    />
                  </Link>
                  <div>
                    <Link to={"/profile/" + comment?.userId?._id}>
                      <p className='font-medium text-base text-ascent-1'>
                        {comment?.userId?.firstName} {comment?.userId?.lastName}
                      </p>
                    </Link>
                    <span className='text-ascent-2 text-sm'>
                      {moment(comment?.createdAt ?? "2023-05-25").fromNow()}
                    </span>
                  </div>
                </div>
                <div className='ml-12'>
                  <p className='text-ascent-2'>{comment?.comment}</p>
                </div>
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
