import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './login';
import Chat from './chat';

function App() {
  <>

    
    <BrowserRouter>
    <Routes>
  
    <Route path="/login" element={<LoginPage/> } />
    
    <Route path="/chat" element={<Chat/> } />
    
    </Routes>
    </BrowserRouter>
    
    </>
    

}

export default App;
