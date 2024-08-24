import { createBrowserRouter } from "react-router-dom";

import RegisterPage from "./pages/Register/RegisterPage.jsx";
import Home from "./pages/Home/home.jsx";
import Login from './pages/Login/Login.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    children: [{path: "/", element: <Home />}],
  },
  {
    path: "/",
    children: [{path: "/register", element: <RegisterPage />}],
  },
  {
    path: "/",
    children: [{path: "/login", element: <Login />}],
  }
]);

