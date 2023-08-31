import React, { useState } from "react";

const Product = ({ post }) => {
  const [selected, setSelected] = useState(true);
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt="" />
      </div>
      <div>
        <img src={post.price} alt="" />
      </div>
      <div>
        <button>{selected ? <p>Remove Item</p> : <p>Add Item</p>}</button>
      </div>
    </div>
  );
};

export default Product;
