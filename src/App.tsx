import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { useState } from 'react'
import Modal from './components/common/modal'
function App() {
  // const [count, setCount] = useState(0);


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
    </BrowserRouter>
  );

}

export default App;
