
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth} from "../Context/AuthContext";

function SignUp() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const {user, signUp} = UserAuth();
  const [error , setError] = useState("");
  const navigate = useNavigate()  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await signUp(email,password)
      navigate("/")
    } catch (error){
      
      console.log(error)
      setError(error.message)
    }
  }
  
  
  
  
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block w-full h-full absolute "
          // src={netflixBackground}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/4ce96108-1f99-4476-ba90-af8b26d471e7/IN-en-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen">
          <div className=" fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold ">Sign Up</h1>
                {error ? <p>{error}</p> : null}

                <form onSubmit={handleSubmit} className="w-full p-4 flex flex-col">
                  <input
                  onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    className="p-3 my-2 rounded-lg bg-gray-700"
                  />

                  <input
                  onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    className="p-3 my-2 rounded-lg bg-gray-700"
                  />
                  <button className="bg-red-600 rounded-lg px-3 py-3 mt-6 mb-3">
                    SignUp
                  </button>
                  <div className="flex justify-between text-sm font-thin text-gray-400">
                    <p>
                      <input type="checkbox" /> Remember me
                    </p>
                    <p>Need help?</p>
                  </div>
                  <div>
                    <p className="mt-16 text-gray-500 text-sm">
                      Already subscribe to Netflix?
                      <span className="text-sm font-semibold text-white ml-1">
                        <Link to="/login"> Sign In.</Link>
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
