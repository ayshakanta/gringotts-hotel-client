import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { _id, image, RoomDescription } = room;
  return (
    <div className="mb-6 drop-shadow-lg">
      <Link to={`/details/${_id}`}>
        <div className="bg-slate-200  text-center items-center justify-center ">
          <img
            className="w-full h-64 mb-4 items-center text-center"
            src={image}
            alt=""
          />
          <h2 className="text-xl font-bold p-3 pb-4 text-cyan-900">
            {RoomDescription}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Room;
