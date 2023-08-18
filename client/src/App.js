import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './login';
import Signup from './signup';

function App() {
  <>

    
    <BrowserRouter>
    <Routes>
  
    <Route path="/login" element={<LoginPage/> } />
    <Route path="/signup" element={<Signup/> } />
    {/* <Route path="*" element={<Error404/>} /> */}
    </Routes>
    </BrowserRouter>
    
    </>
    

}

export default App;
