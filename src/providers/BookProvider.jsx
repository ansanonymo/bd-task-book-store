import { useState } from "react";
import { BookContext } from "../context/context";

export default function BookProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState({});
  const [error, setError] = useState(false);

  const value = {
    isLoading,
    setIsLoading,
    book,
    setBook,
    error,
    setError,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}
