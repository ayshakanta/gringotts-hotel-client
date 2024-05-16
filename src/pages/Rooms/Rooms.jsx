import { useEffect, useState } from "react";
import Room from "./Room";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/rooms`)
      .then((res) => res.json())
      .then((data) => setRooms(data));
  });
  return (
    <div className="mt-10">
      <div className="text-center w-2/3 mx-auto">
        <h2 className="text-3xl font-bold p-6">Available Rooms</h2>
        <p className="text-xl">
          Embark on a journey of comfort and relaxation with our range of
          available rooms, thoughtfully designed to cater to every traveler is
          needs and preferences. Whether you are seeking a peaceful retreat for
          a solo adventure or spacious accommodations for a family getaway, we
          have the perfect room waiting for you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 mt-20 mb-20 md:mx-20">
        {rooms.map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
