import { useState } from "react";
import { AllBookContext } from "../context/context";

export default function AllBooksProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [error, setError] = useState(null);

  const value = {
    isLoading,
    allBooks,
    error,
    setIsLoading,
    setAllBooks,
    setError,
  };
  return (
    <AllBookContext.Provider value={value}>{children}</AllBookContext.Provider>
  );
}
