import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[23%] p-6 border cursor-pointer flex gap-5 flex-col m-2 items-center">
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(remove(item.id));
              toast.success("Item removed successfully");
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
