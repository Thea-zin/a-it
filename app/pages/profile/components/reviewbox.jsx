export default function ReviewBox({ review = null }) {
  const star = (parseInt(review.experience) + parseInt(review.recommend)) / 4;
  return (
    <div className="flex">
      <div className="bg-red">
        <div>
          <img src={review.icon} alt="" />
        </div>
        <div>{review.name}</div>
        <div>{star}</div>
      </div>
      <div className="bg-blue-500 flex-1">
        <div className="">{review.comment}</div>
      </div>
    </div>
  );
}
