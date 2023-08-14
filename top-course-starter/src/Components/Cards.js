import React, { useState } from "react";
import Card from "../Components/Card";

const Cards = ({ courses, category }) => {
  const [likedcourses, setLikedcourses] = useState([]);

  let getCourses = () => {
    if (category === "All") {
      let allcourses = [];
      Object.values(courses).forEach((coursecategory) => {
        coursecategory.forEach((course) => {
          allcourses.push(course);
        });
      });
      return allcourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="w-11/12 flex flex-wrap justify-center pl-6 m-auto">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedcourses={likedcourses}
            setLikedcourses={setLikedcourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
