import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { products } from "../data";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  let fetchProductData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      setPosts(products);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className=" h-screen w-[80%] m-auto flex flex-wrap">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        posts.map((post) => <Product post={post} key={post.id} />)
      ) : (
        <div>
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
