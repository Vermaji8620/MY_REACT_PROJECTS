import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="border overflow-auto mt-10 pt-36">
      {loading ? (
        <div className="flex justify-center flex-col items-center h-screen">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        "Nothing to display"
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold">{post.title}</p>
            <p>
              By <span>{post.author}</span>on<span>{post.category}</span>
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content} </p>
            <div>
              {post.tags.map((tag, index) => {
                return (
                  <span key={index} className="text-blue-600">
                    #{tag}
                  </span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
