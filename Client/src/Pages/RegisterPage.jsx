import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate=useNavigate();
  async function RegisterUser(e) {
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:3001/auth/register", { username, password });
      console.log(res.data);
      alert(res.data.message);
      navigate("/Login");
    } catch (e) {
      console.log("Error while Registering User!!!", e);
    }
  }
  return (
    <div className="w-2/3 mt-16 overflow-hidden rounded-2xl mx-auto flex h-3/5 bg-white">
      <div className="left w-1/2 h-full gap-6 items-center flex flex-col p-8 bg-slate-300">
        <h1 className="font-semibold text-xl font-serif text-teal-600">
          Create Your Account
        </h1>
        <input
          type="text"
          className="w-3/4 px-4 py-2"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-3/4 px-4 py-2"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-3/4 bg-teal-600 py-2 px-4 text-white font-semi-bold font-mono rounded-2xl hover:bg-teal-700"
          onClick={RegisterUser}
        >
          Submit
        </button>
        <span className="font-mono  font-bold">
          Already Have an account??
          <NavLink to="/Login" className="text-teal-600">
            {" "}
            Login Here
          </NavLink>
        </span>
      </div>
      <div className="right w-1/2 h-full bg-black">
        <img
          src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default RegisterPage;
