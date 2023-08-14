import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  let filterhandler = (val) => {
    setCategory(val);
  };
  return (
    <div className="pt-4 pb-4  font-bold text-3xl text-center flex justify-between w-[50%]  m-auto">
      {filterData.map((data) => {
        return (
          <button
            className={`bg-bgDark text-white rounded-md pb-2 pt-2 pl-4 pr-4 m-2 ${category===data.title ? "bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`}
            onClick={() => filterhandler(data.title)}
            key={data.id}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
