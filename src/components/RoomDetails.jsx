import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const room = useLoaderData();
  console.log(room);
  const {
    image,
    RoomDescription,
    RoomDetails,
    PricePerNight,
    RoomSize,
    SpecialOffers,
  } = room;
  return (
    <div className="min-h-screen flex lg:mx-32 mt-20">
      <div className="flex-1 mr-4">
        <h2 className="text-3xl font-bold text-cyan-900">{RoomDescription}</h2>
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
        <hr />

        <div className="mt-6 bg-amber-700 bg-opacity-30">
          <h2 className="text-2xl text-cyan-950 font-bold">
            Want To Book This Room!!
          </h2>
          <div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img className="" src={image} alt="" />
      </div>
    </div>
  );
};

export default RoomDetails;
