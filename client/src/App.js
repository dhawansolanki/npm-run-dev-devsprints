import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './login';
import Chat from './chat';
import Signup from './signup';
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
           <Route path="/signup" element={<Signup/> } />
             <Route path="/chat" element={<Chat/> } />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
