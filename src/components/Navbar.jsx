import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  console.log(user);

  const handleLogOut = async () => {
    // e.preventDefault();
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-5 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="font-nameLogo text-red-600 text-4xl font-normal cursor-pointer ">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="text-white pr-4">Profile</button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 px-6 py-2 rounded text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
