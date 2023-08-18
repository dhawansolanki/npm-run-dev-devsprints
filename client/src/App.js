import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './login';

function App() {
  <>

    
    <BrowserRouter>
    <Routes>
  
    <Route path="/login" element={<LoginPage/> } />
    {/* <Route path="*" element={<Error404/>} /> */}
    </Routes>
    </BrowserRouter>
    
    </>
    

}

export default App;
