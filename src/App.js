import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Collection from './pages/Collection';
  
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/collections" element={<Collection/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
