import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalpages } = useContext(AppContext);
  return (
    <div className="flex border w-1/2 justify-between fixed bottom-0 bg-white">
      <div className=" flex border">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border p-2"
          >
            Previous
          </button>
        )}
        {page < totalpages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border p-2"
          >
            Next
          </button>
        )}
      </div>
      <div className="border bg-white bottom-0 right-0">
        <p>
          page {page} of {totalpages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
