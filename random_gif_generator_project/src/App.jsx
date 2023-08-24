import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full relative h-screen flex flex-col background overflow-x-hidden items-center">
      <h1 className=" bg-white w-11/12 rounded-md text-center mt-[40px] ml-[25px] mr-[25px] text-3xl font-bold">
        Random GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
