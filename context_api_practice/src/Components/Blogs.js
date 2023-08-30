import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="overflow-auto p-[3rem] m-[5rem] border">
      {loading ? (
        <div className="flex justify-center flex-col items-center h-screen">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        "Nothing to display"
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
