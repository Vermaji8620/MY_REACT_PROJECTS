import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();
  const [totalamount, setTotalamount] = useState(0);
  useEffect(() => {
    setTotalamount(cart.reduce((acc, curr) => acc + curr, 0));
  }, [cart]);

  return (
    <div className="h-screen w-[80%] m-auto">
      {cart.length > 0 ? (
        <div className="flex">
          <div className="flex flex-wrap w-full">
            {cart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </div>

          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <div>
              <p>Total Items: {cart.length} </p>
            </div>
            <div>
              <p>Total Amount: {totalamount}</p>
            </div>
            <div>
              <button>CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div>
            <p>Cart Empty</p>
          </div>{" "}
          <div>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Shop Now
            </button>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Cart;
