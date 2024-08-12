import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AllBooksProvider from "./providers/AllBooksProvider.jsx";
import BookProvider from "./providers/BookProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <AllBooksProvider>
        <App />
      </AllBooksProvider>
    </BookProvider>
  </StrictMode>
);
