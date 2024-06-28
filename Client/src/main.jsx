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
import AddRecipePage from './Pages/AddRecipePage.jsx';
import AllRecipes from './Pages/AllRecipes.jsx';
import RecipeCard from './Components/RecipeCard.jsx';
import SavedRecipes from "./Pages/SavedRecipes.jsx";
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
          element : <AddRecipePage/>
        },
        {
          path : "AllRecipes",
          element : <AllRecipes/>
        },
        {
          path : "SavedRecipe",
          element : <SavedRecipes/>
        },
        {
          path : "cardDemo",
          element : <RecipeCard/>
        }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
