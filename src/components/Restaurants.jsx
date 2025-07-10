import { BsDot } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const Restaurants = ({ info }) => {
  const { name, cuisines, avgRatingString, cloudinaryImageId, locality } = info;
  const deliverytime = info.sla.slaString;
  const title = info.areaName;


  return (
    <div className="my-5 md:my-12">
      <div className="w-[19rem] shadow-lg md:shadow-none rounded-lg  p-3 space-y-1 transition-all duration-100 ease-linear cursor-pointer  hover:shadow-lg hover:scale-[.98]">
        <img
          className="h-[10rem] w-[100%] object-cover rounded-xl "
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
          alt="pizza img"
        />

        <p className="font-extrabold text-xl">{name}</p>
        <p className="font-medium">{cuisines.join(", ")}</p>
        <div className="flex gap-2 items-center ">
          <div className="flex items-center gap-1 font-semibold">
            <p className="text-[12px] text-white bg-green-600 p-0.5 rounded-full">
              <AiFillStar />
            </p>
            <p>{avgRatingString}</p>
          </div>{" "}
          <p className="flex items-center  font-bold">
            <BsDot />
            {deliverytime}
          </p>
        </div>

        <p className="text-gray-700 italic">{title}</p>
        <p className="text-gray-700 italic">{locality}</p>
      </div>
    </div>
  );
};

export default Restaurants;
