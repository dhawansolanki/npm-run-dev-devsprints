import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './login';
import Chat from './chat';
import SignupPage from './signup';
import "./App.css"
import LandingPage from './landing';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingPage /> } />
          <Route path="login" element={<LoginPage />} />
           <Route path="/signup" element={<SignupPage/> } />
             <Route path="/chat" element={<Chat/> } />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
