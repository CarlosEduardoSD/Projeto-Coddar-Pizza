import { createBrowserRouter } from "react-router-dom";
import Header from "../src/components/header.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [{path: "/", element: <Header />}],
  }
]);
