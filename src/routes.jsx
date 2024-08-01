import { createBrowserRouter } from "react-router-dom";

import Header from "../src/components/header.jsx";
import RegisterPage from "./pages/Register/RegisterPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [{path: "/register", element: <RegisterPage />}],
  }
]);

