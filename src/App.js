import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Collection from './pages/Collection';
import Individual from './pages/Individual';
  
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/collections" element={<Collection/>}></Route>
    <Route path="/individual" element={<Individual/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
