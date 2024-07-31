import { createBrowserRouter } from "react-router-dom";

import Header from "../src/components/header.jsx";
import RegisterPage from "./components/Register/RegisterPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [{path: "/", element: <RegisterPage />}],
  }
]);

