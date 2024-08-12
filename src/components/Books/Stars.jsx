import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export default function Stars({ rating }) {
  const fillStars = [];
  const emptyStars = [];

  for (let i = 0; i < rating; i++) {
    fillStars.push(<FaStar key={i} />);
  }

  for (let i = 0; i < 5 - rating; i++) {
    emptyStars.push(<CiStar key={i} />);
  }
  return (
    <div className="flex flex-row flex-wrap gap-1 text-emerald-600">
      {fillStars}
      {emptyStars}
    </div>
  );
}
