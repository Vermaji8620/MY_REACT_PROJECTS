import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // let fetchData = async () => {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const output = await axios.get(url);
  //   const imageSource = output.data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line
  // }, []);

  const { gif, loading, fetchData } = useGif();

  const clickhandler = () => {
    fetchData();
  };
  return (
    <div className="w-1/2 m-auto rounded-lg flex flex-col items-center gap-y-5 mt-[15px]  bg-green-700">
      <h1 className="text-3xl underline uppercase font-bold mt-[15px]">
        A Random GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}
      <button
        onClick={clickhandler}
        className="bg-white w-10/12 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
