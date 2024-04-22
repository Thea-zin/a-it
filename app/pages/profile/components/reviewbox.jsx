import Stars from "../../software/components/star_display";

export default function ReviewBox({ review = null }) {
  const star = (parseInt(review.experience) + parseInt(review.recommend)) / 4;
  return (
    <div className="lg:flex my-3 border-[1px] border-darkblue rounded-2xl p-5 relative">
      <div className="flex flex-col place-content-center place-items-center lg:max-w-[25%]">
        <div className="flex place-content-center">
          <img src={review.icon} alt="" />
        </div>
        <div className="text-ellipsis overflow-hidden">{review.name}</div>
        <Stars number={star} />
      </div>
      <div className="flex-1 flex flex-col ml-5">
        <div className="font-bold text-xl overflow-hidden text-ellipsis">{review.title}</div>
        <hr />
        <div className="flex-1 mt-2 overflow-hidden text-ellipsis">{review.comment}</div>
      </div>
    </div>
  );
}
