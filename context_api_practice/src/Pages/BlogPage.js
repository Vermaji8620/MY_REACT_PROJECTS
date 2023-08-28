import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
// import { baseUrl } from "../baseUrl";
import Header from "../Components/Header";
import Spinner from "../Components/Spinner";
import BlogDetails from "../Components/BlogDetails";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedblogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblogs(data.relatedblogs);
    } catch (error) {
      // console.log()
      setBlog(null);
      setRelatedblogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button
          onClick={() => {
            navigation(-1);
          }}
        >
          Back
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2>Related Blogs</h2>
          console.log(relatedblogs)
          {relatedblogs.length > 0
            ? relatedblogs.map((post) => {
                return (
                  <div key={post.id}>
                    <BlogDetails post={post} />
                  </div>
                );
              })
            : console.log("Nothing to fetch")}
        </div>
      ) : (
        <div>
          <p>No Blog available</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
