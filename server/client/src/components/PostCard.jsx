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
