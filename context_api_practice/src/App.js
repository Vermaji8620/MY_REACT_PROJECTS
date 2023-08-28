import React, { useContext, useEffect } from "react";
// import Header from "./Components/Header";
// import Blogs from "./Components/Blogs";
// import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  const { fetchblogpost } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const page = searchParams.get("page") ?? 1; // page variable k andar mein key 'page' ka value store kr derhe hai-------agar hai to thik hai nai to 1 store kr denge
    if (location.pathname.includes("tags")) {
      // iska matlab tag wala page show krna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchblogpost(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchblogpost(Number(page), null, category);
    } else {
      fetchblogpost(Number(page));
    }
    // eslint-disable-next-line
  }, [location.pathname, location.search]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </>

    //
  );
}

export default App;
