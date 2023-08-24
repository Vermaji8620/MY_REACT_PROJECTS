// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import axios from "axios";

const useGif = (tag) => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const memeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const randurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  let fetchData = async () => {
    setLoading(true);
    const output = await axios.get(tag ? memeurl : randurl);
    const imageSource = output.data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
