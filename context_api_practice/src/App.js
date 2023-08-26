import React, { useContext, useEffect } from "react";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";

function App() {
  const { fetchblogpost } = useContext(AppContext);
  useEffect(() => {
    fetchblogpost();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="relative">
      <Header />
      <div className="App border w-1/2 m-auto">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
