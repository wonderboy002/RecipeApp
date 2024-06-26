import React, { useEffect } from "react";
import { IoRestaurant } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Navbar = () => {
  const [cookie, setCookies,removeCookie] = useCookies(["access-token"]);
  const navigate = useNavigate();

  function logoutUser() {
    removeCookie("access-token");
    localStorage.removeItem("userId");
    navigate("/Login");
  }
  return (
    <div>
      <nav className="flex  bg-[#16a085] justify-center">
        <ul className="flex gap-10 justify-between p-2 items-center">
          <div className="mr-auto">
            <IoRestaurant style={{ fontSize: "25px", color: "white" }} />
          </div>

          <NavLink to="/" className="text-white font-bold text-lg font-serif">
            Home
          </NavLink>
          <NavLink
            to="/SavedRecipe"
            className="text-white font-bold text-lg font-serif"
          >
            Saved Recipes
          </NavLink>
          <NavLink
            to="/AddRecipe"
            className="text-white font-bold text-lg font-serif"
          >
            Add Recipe
          </NavLink>
        </ul>

        <div className="ml-auto">
          {cookie["access-token"] ? (
            <NavLink
              onClick={logoutUser}
              to="/Register"
              className="text-lg font-semibold font-mono p-2 transition-all hover:bg-black hover:text-white bg-white rounded-lg"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/Register"
              className="text-lg font-semibold font-mono p-2 transition-all hover:bg-black hover:text-white bg-white rounded-lg"
            >
              Register
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
