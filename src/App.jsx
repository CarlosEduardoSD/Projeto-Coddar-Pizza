import { router } from "./routes.jsx";
import { RouterProvider } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <>
          <RouterProvider router={router} />
    </>
  )
}

export default App;
