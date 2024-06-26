import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';
import Layout from './Pages/Layout.jsx';
import Hero from './Components/Hero.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
const router=createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
        {
          path : "",
          element : <Hero/>
        },
        {
          path : "Register",
          element : <RegisterPage/>
        },
        {
          path : "Login",
          element : <LoginPage/>
        },
        {
          path : "AddRecipe",
          element : <h1>Add Recipe Page</h1>
        },
        {
          path : "SavedRecipe",
          element : <h1>All Saved Recipe's Here</h1>
        }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
