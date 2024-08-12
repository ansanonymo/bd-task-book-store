import { useContext, useEffect } from "react";
import BookCard from "./BookCard";
import { AllBookContext } from "../../context/context";
import { getAllBooks } from "../../api/api";

export default function BooksContainer() {
  const { isLoading, allBooks, error, setIsLoading, setAllBooks, setError } =
    useContext(AllBookContext);

  useEffect(() => {
    async function fetchAllBooks() {
      try {
        const allBooks = await getAllBooks();
        setAllBooks(allBooks);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setIsLoading(true);
    fetchAllBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content;

  if (isLoading) {
    content = (
      <h1 className="text-emerald-600 text-center text-3xl my-4">
        Fetching data....
      </h1>
    );
  } else if (error) {
    content = (
      <h1 className="text-rose-600 text-center text-3xl my-4">{error}</h1>
    );
  } else {
    content = allBooks?.map((book) => {
      return <BookCard key={book?.id} book={book} />;
    });
  }

  return (
    <div className="p-4 flex flex-row flex-wrap gap-5 justify-center">
      {content}
    </div>
  );
}
