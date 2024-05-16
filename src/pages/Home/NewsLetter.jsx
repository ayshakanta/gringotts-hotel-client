import { Link } from "react-router-dom";
import news from "../../assets/images/newsletter.jpg";

const NewsLetter = () => {
  return (
    <div className="mx-10 mt-20 mb-20">
      <h2 className="text-3xl font-bold text-cyan-900 mb-2">
        Stay Updated with Our Newsletter!
      </h2>
      <p className="mb-6">
        Subscribe to our newsletter to stay in the loop with the latest news,
        updates, and exclusive offers straight to your inbox. Do not miss out
        on:
      </p>
      <div className="lg:flex gap-6 ">
        <div className="flex-1 space-y-4">
          <h2 className="text-xl font-bold">Exclusive Deals:</h2>
          <p>
            Be the first to know about our special promotions, discounts, and
            limited-time offers. Save big on your next booking!
          </p>
          <h2 className="text-xl font-bold">New Room Releases: </h2>
          <p>
            Discover our newest room additions and be the first to book your
            stay in our latest accommodations.
          </p>
          <h2 className="text-xl font-bold">Event Reminders:</h2>
          <p>
            Receive timely reminders about upcoming events, holidays, and
            special occasions so you can plan ahead and make your reservations
            early.
          </p>
          <div>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <Link to="/login">
              <button className="text-xl btn text-cyan-900">Subscribe</button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img src={news} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
