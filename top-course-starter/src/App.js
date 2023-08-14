import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        let res = await fetch(apiUrl);
        let output = await res.json();
        console.log(output.data);
        setCourses(output.data);
      } catch {
        toast.error("Something went wrong");
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        {loading ? (
          <ClipLoader />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
};

export default App;
