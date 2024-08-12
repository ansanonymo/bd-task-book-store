import Stars from "./Stars";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "./../common/Image";
import { deleteBook } from "../../api/api";
import { useContext } from "react";
import { AllBookContext } from "./../../context/context";

export default function BookCard({ book }) {
  const { setAllBooks } = useContext(AllBookContext);

  const handleDelete = async () => {
    if (confirm(`Are you sure to delete ${book?.name}?`)) {
      const data = await deleteBook(book?.id);
      setAllBooks((prevBooks) => {
        return prevBooks?.filter((book) => data?.id != book?.id);
      });
    }
  };

  return (
    <div className="flex flex-col shadow-xl w-80 bg-emerald-50">
      <Link to={"/book/" + book?.id}>
        <div className="w-[320px] h-[420px]">
          <Image src={book?.url} alt={book?.name} />
        </div>
      </Link>
      <div className="flex flex-col flex-wrap py-3 px-4">
        <Link to={"/book/" + book?.id}>
          <h2 className="text-2xl text-emerald-800 text-wrap line-clamp-1">
            {book?.name}
          </h2>
        </Link>
        <h3 className="mt-2 text-lg text-gray-600 mb-1">{book?.author}</h3>

        <Stars rating={book?.rating} />
        <p className="text-xl mt-2 line-clamp-1">{book?.price}$</p>
      </div>
      <div className="flex flex-row text-3xl text-white">
        <button
          onClick={handleDelete}
          className="w-full flex justify-center items-center bg-rose-700"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
