import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Home';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    axios
      .post("http://localhost:4000/login", payload)
      .then((res) => {
        console.log("login: " + res.data.Status);
        if (res.data.Status === "Success") {
          console.log(res.data.user);
          localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/uhome')
           alert("login successful")
        } else {
          alert("wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div>
      <Home/>
  
    <div className="flex items-center justify-center min-h-screen bg-gray-100">  
      <div className="relative max-w-md w-full bg-white p-8 rounded-md shadow-md overflow-hidden">
        {/* Front side of the card */}
     
      
        <div className="relative z-10">  
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
              Login to user account
            </h2>
            
          </div>
          
      
          <form className="space-y-6" onSubmit={handleSubmit}>
       
          {/* <form className="space-y-6" onSubmit={handleSubmit}> */}
            {/* Email Input */}
            <div>
                
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
              >
                Log in
              </button>
              <br />
              <p className="mt-2 text-sm text-gray-600">
                Don't have an account? Create
                <button
                  onClick={formHandle1}
                  className="ml-2 text-indigo-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                >
                  Signup
                </button>
              </p>
            </div>
          </form>
          {/* </form> */}
        </div>

        {/* Backside tilted background */}
        <div
          className="absolute h-full w-full bg-indigo-500 transform -skew-y-6 origin-bottom-right"
        ></div>
        
      </div>
      </div>
    </div>
  );
};

export default Login;
