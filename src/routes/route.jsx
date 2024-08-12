import { createBrowserRouter } from "react-router-dom";
import SideBarTemplate from "./templates/SideBarTemplate";
import DashboardPage from "./../pages/DashboardPage";
import BooksPage from "./../pages/BooksPage";
import AddBookPage from "./../pages/AddBookPage";
import NotFoundPage from "../pages/NotFoundPage";
import BookPage from "../pages/BookPage";

const routes = createBrowserRouter([
  {
    element: <SideBarTemplate />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },

      {
        path: "/addbook",
        element: <AddBookPage />,
      },
      {
        path: "/book/:id",
        element: <BookPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default routes;
