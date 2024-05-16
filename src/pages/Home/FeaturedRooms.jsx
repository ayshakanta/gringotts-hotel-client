import { useEffect, useState } from "react";
import FeaturedRoom from "./FeaturedRoom";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/rooms`)
      .then((res) => res.json())
      .then((data) => setRooms(data));
  });
  return (
    <div className=" items-center justify-center">
      <div className="w-2/3 mb-10 mx-auto">
        <h2 className="text-4xl font-bold text-cyan-800 pt-10 text-center pb-6">
          Discover Our Featured Rooms
        </h2>
        <p className="text-xl text-center ">
          Elevate your stay with our collection of featured rooms, meticulously
          curated to offer unparalleled comfort, luxury, and unique experiences.
          Each room has been thoughtfully <br /> designed to cater to the
          diverse preferences and needs of our guests, ensuring a memorable and
          delightful stay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 mt-20 mb-20 md:mx-20">
        {rooms.slice(0, 6).map((room) => (
          <FeaturedRoom key={room._id} room={room}></FeaturedRoom>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
