const BookingRow = ({ booking }) => {
  const { _id, title, image, price, date, customerName } = booking;

  const handleCancel = (id) => {
    const proceed = confirm("Are you sure you want to cancel the booking?");
    if (proceed) {
      fetch(``)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
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
        <button className="btn btn-ghost btn-xs">Update Date</button>
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
        <button className="btn btn-ghost btn-xs">Reviews</button>
      </th>
    </tr>
  );
};

export default BookingRow;
