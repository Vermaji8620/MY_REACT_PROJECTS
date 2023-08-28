import React from "react";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="App border w-1/2 m-auto">
          <Blogs />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Home;
