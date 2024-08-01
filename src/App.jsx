import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js';

import {RouterProvider} from 'react-router-dom';
import  { router }  from "./routes.jsx";

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
