import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Slices/CounterSlice";

const Counter = () => {
  //  slice me se data fetch krne k liye ye selector lgta hai(initial value chhaiye to ye wala)
  const count = useSelector((state) => state.counter.value);

  //   actions jo export kiye hai ..uska sb kch use krne k liye....useDispatch hook use krna pdega(function chaiye to ye wala)
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <br />
      <br />

      {/* yaha pe hmko count chchaiye ........  matlb ki slice ka andar me state ka value ............jiske liye useSelector() hoook use krna hga*/}
      <div>{count} </div>
      <br />
      <br />

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <br />
      <br />
    </div>
  );
};

export default Counter;
