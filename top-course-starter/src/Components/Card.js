import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedcourses = props.likedcourses;
  let setLikedcourses = props.setLikedcourses;

  let clickeventhandler = () => {
    if (likedcourses.includes(course.id)) {
      // pehle se like  pada hua tha
      setLikedcourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // pehle se like nahi hua pada tha
      if (likedcourses.length === 0) {
        // length empty hai
        setLikedcourses([course.id]);
      } else {
        //  length empty nahi hai
        setLikedcourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked successfully");
    }
  };
  return (
    <div className="rounded-md m-2 overflow-auto w-[300px] opacity-80 bg-bgDark">
      <div className="relative">
        <img src={course.image.url} className="" alt={course.image.alt} />
        <div className="flex flex-col">
          <button
            onClick={clickeventhandler}
            className="w-[35px] flex justify-center text-red-700 h-[35px] flex-col items-center absolute right-2 bottom-2 rounded-full bg-white"
          >
            {likedcourses.includes(course.id) ? (
              <AiFillHeart fontSize="1.75rem" />
            ) : (
              <AiOutlineHeart fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-white p-4">
        <p className="font-bold pb-2">{course.title}</p>
        <p>
                {(course.description.length > 100)? (course.description.substr(0, 100) + "..."):(course.description)}
        </p>
      </div>
    </div>
  );
};

export default Card;
