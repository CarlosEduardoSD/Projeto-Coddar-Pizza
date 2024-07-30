import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js';

import {RouterProvider} from 'react-router-dom';
import  { router }  from "./routes.jsx";
import RegisterPage from './components/Register/RegisterPage.jsx'

function App() {
  return (
    <>
    <RegisterPage></RegisterPage>
     
    </>
  )
}

export default App;
