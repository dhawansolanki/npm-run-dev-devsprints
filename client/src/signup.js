import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupPage = () => {
  const notifySuccess = () => toast("Login Successfull!");
  const notifyError = () => toast("Something went wrong!");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
        name,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8080/signup', requestData);

      if (response.status === 200) {
        const responseData = response.data;
        notifySuccess()
        console.log('API response:', responseData);
      }
      else if (response.status === 401) {
        const responseData = response.data;
        notifyError()
        console.log('API response:', responseData);
      }
       else {
        notifyError()
        console.error('API error:', response.statusText);
      }
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  return (

    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
         style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}>
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
           Sign Up
          </h2>
          <p className="mt-2 text-sm text-gray-600">Create your new account</p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3">
          <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg text-white bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300">
            <img className="w-4 h-4" src="data:image/svg+xml;base64,..."/>
          </span>
          <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300">
            <img className="w-4 h-4" src="data:image/svg+xml;base64,..."/>
          </span>
          <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg text-white bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300">
            <img src="data:image/svg+xml;base64,..."/>
          </span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-gray-300"></span>
          <span className="text-gray-500 font-normal">OR</span>
          <span className="h-px w-16 bg-gray-300"></span>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

      <div className="relative">
        <div className="absolute right-0 mt-4">

        </div>
        <label className="text-sm font-bold text-gray-700 tracking-wide">Name</label>
        <input
          className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="tetxt"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="relative">
        <div className="absolute right-0 mt-4">
        </div>
        <label className="text-sm font-bold text-gray-700 tracking-wide">Email</label>
        <input
          className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="email"
          placeholder="mail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-8 content-center">
        <label className="text-sm font-bold text-gray-700 tracking-wide">
          Password
        </label>
        <input
          className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-8 content-center">
        <label className="text-sm font-bold text-gray-700 tracking-wide">
         Confirm Password
        </label>
        <input
          className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="password"
          placeholder="Confirm password"
          value={confirmpassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
        >
          Sign up
        </button>
      </div>
    </form>
      </div>
    </div>
  );
}

export default SignupPage;
