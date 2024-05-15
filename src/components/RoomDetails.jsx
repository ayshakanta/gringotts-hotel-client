import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const RoomDetails = () => {
  const room = useLoaderData();

  const {
    _id,
    image,
    RoomDescription,
    RoomDetails,
    PricePerNight,
    RoomSize,
    SpecialOffers,
  } = room;

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;

    const booking = {
      customerName: name,
      email,
      date,
      price: PricePerNight,
      service: _id,
      title: RoomDescription,
      image,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="min-h-screen lg:mx-32 mt-20">
      <div className=" flex ">
        <div className="flex-1 mr-4">
          <h2 className="text-3xl font-bold text-cyan-900">
            {RoomDescription}
          </h2>
          <h3 className="mt-4 text-xl text-cyan-900">{RoomDetails.Bathroom}</h3>
          <hr />
          <div className="font-semibold flex gap-6 mt-8">
            <div className="mr-8 space-y-2">
              <h2 className="text-xl">Room Details</h2>
              <li>{RoomDetails.Bed}</li>
              <li>Price Per Night: {PricePerNight}$</li>
              <li>Room Size: {RoomSize}</li>
              <li>Occupancy: {RoomDetails.Occupancy}</li>
              <li>{RoomDetails.View}</li>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl">Amenities</h3>
              {RoomDetails.Amenities.map((amenity, idx) => (
                <li key={idx}>{amenity}</li>
              ))}
            </div>
          </div>
          <hr />
          <h3 className="text-xl font-semibold  pt-6 pb-2">Special Offers:</h3>
          <ul className="font-bold text-xl text-amber-700">
            {SpecialOffers.map((offer, idx) => (
              <h4 key={idx}>{offer}</h4>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <img className="" src={image} alt="" />
        </div>
      </div>
      <div className="mt-10  w-1/2 mx-auto pb-10 ">
        <h2 className="text-2xl text-cyan-950 font-bold text-center">
          Want To Book This Room!!
        </h2>
        <div>
          <form onSubmit={handleBooking} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                defaultValue={user?.email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose Your Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-amber-700 text-white">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
