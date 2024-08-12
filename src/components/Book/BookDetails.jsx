import { Link } from "react-router-dom";
import Image from "../common/Image";
import Stars from "../Books/Stars";

export default function BookDetails({ book }) {
  console.log(book);
  return (
    <div className="mx-auto bg-emerald-50 max-w-[80%] mt-5 mb-3 p-8 text-center shadow-sm">
      <div className="text-left mb-5">
        <Link
          to="/books"
          className="text-lg text-white bg-emerald-600 py-2 px-3 rounded-md"
        >
          Books
        </Link>
      </div>
      <h2 className="text-4xl text-emerald-600">{book?.name}</h2>
      <p className="text-xl mt-2 text-gray-700">{book?.author}</p>
      <div className="w-[320px] h-[420px] mx-auto my-6">
        <Image src={book?.url} alt={book?.name} />
      </div>
      <div className="mx-auto w-fit my-3 text-3xl">
        <Stars rating={book?.rating} />
      </div>
      <p className="text-3xl text-gray-600">{book?.price} $</p>
      <div className="h-[1px] bg-gray-200 my-9"></div>
      <p className="text-gray-600 text-lg">{book?.description}</p>
    </div>
  );
}
