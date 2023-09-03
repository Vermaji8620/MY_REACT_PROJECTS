import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ post }) => {
  // const [selected, setSelected] = useState(true);
  // const setbtn=()=>{setSelected(!selected)}
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const removefromcart = () => {
    dispatch(remove(post.id));
    toast.success("item removed from cart");
  };
  const addtocart = () => {
    dispatch(add(post));
    toast.success("item added");
  };

  return (
    <div className="w-[23%] p-6 border flex gap-5 flex-col m-2 items-center">
      <div>
        <p className="font-bold">{post.title.substring(0, 20)}</p>
      </div>
      <div>
        <p>{post.description.substring(0, 50)}</p>
      </div>
      <div className="">
        <img src={post.image} style={{ height: "10rem" }} alt="" />
      </div>
      <div className="flex justify-around w-full">
        <div>
          <p className="text-green-700 font-bold">${post.price}</p>
        </div>
        <div className="border rounded-lg pl-6 pr-6">
          {cart.some((p) => p.id === post.id) ? (
            <div>
              <button onClick={() => removefromcart()}>Remove Item</button>
            </div>
          ) : (
            <div>
              <button onClick={() => addtocart()}>Add Item</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
