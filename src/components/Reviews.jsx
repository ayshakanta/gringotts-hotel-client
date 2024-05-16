import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Reviews = () => {
  const { user } = useContext(AuthContext);

  const [timeStamp, setTimeStamp] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleReview = (event, id) => {
    event.preventDefault();
    const form = event.target;

    const userName = user.displayName;
    const review = form.review.value;
    const time = Date.now();

    setTimeStamp(time);

    const newReviews = {
      name: userName,
      review: review,
      time: time,
    };
    console.log(newReviews);

    fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          alert("Updated successfully");
          const updatedReview = reviews.map((review) => {
            if (review._id === id) {
              return { ...review, ...newReviews };
            }
            return review;
          });
          setReviews(updatedReview);
        }
      });
  };
  return (
    <div className="min-h-screen mx-10 mt-20 lg:mx-20">
      <h2 className="text-2xl font-bold pb-6 text-cyan-900">
        Add Your Reviews Here:
      </h2>
      <form
        onSubmit={(event) => handleReview(event, reviews._id)}
        className="card-body"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            defaultValue={user.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Review</span>
          </label>
          <input
            type="text"
            placeholder="Your Review"
            name="review"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6 ">
          <button className="btn bg-cyan-900 text-white">Submit</button>
        </div>
      </form>
      {timeStamp && <p>Submitted at: {new Date(timeStamp).toLocaleString()}</p>}
    </div>
  );
};

export default Reviews;
