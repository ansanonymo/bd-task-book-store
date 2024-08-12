import { useParams } from "react-router-dom";

import BookDetails from "../components/Book/BookDetails";
import { useContext, useEffect } from "react";
import { BookContext } from "../context/context";
import { getBook } from "../api/api";

export default function BookPage() {
  const { isLoading, setIsLoading, book, setBook, error, setError } =
    useContext(BookContext);
  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      try {
        const book = await getBook(id);
        setBook(book);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setIsLoading(true);
    fetchBook();

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
    content = <BookDetails book={book} />;
  }

  return <div className="w-full">{content}</div>;
}
