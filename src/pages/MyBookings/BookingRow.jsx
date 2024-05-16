import { Link } from "react-router-dom";

const BookingRow = ({ booking, handleCancel, handleUpdate }) => {
  const { _id, title, image, price, date, customerName } = booking;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={image} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">${price}</div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{date}</td>
      <th>
        <div>
          <form onSubmit={(event) => handleUpdate(event, _id)}>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
            <br />
            <button className="btn btn-ghost btn-xs">Update Date</button>
          </form>
        </div>
      </th>
      <th>
        <button
          onClick={() => handleCancel(_id)}
          className="btn btn-ghost btn-xs"
        >
          Cancel
        </button>
      </th>
      <th>
        <Link to={`/reviews/${_id}`}>
          <button className="btn btn-ghost btn-xs">Reviews</button>
        </Link>
      </th>
    </tr>
  );
};

export default BookingRow;
