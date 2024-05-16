import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `${import.meta.env.VITE_API_URL}/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleCancel = (id) => {
    const proceed = confirm("Are you sure you want to cancel the booking?");
    if (proceed) {
      fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Canceled successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleUpdate = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const updatedBooking = {
      date,
    };
    console.log(updatedBooking);
    const proceed = confirm(
      "Are you sure you want to update the booking date?"
    );
    if (proceed) {
      fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBooking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.modifiedCount > 0) {
            alert("Updated successfully");
            const updatedBookings = bookings.map((booking) => {
              if (booking._id === id) {
                return { ...booking, ...updatedBooking };
              }
              return booking;
            });
            setBookings(updatedBookings);
          }
        });
    }
  };

  return (
    <div className="min-h-screen lg:mx-20 mt-20">
      <h2 className="text-3xl font-bold text-cyan-900 text-center pb-10">
        My Booking List
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Room Description</th>
              <th>Customer Name</th>
              <th>Booking Date</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleCancel={handleCancel}
                handleUpdate={handleUpdate}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
