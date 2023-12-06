import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Collection from './pages/Collection';
import Individual from './pages/Individual';
import SingleCollection from './pages/SingleCollection';
import Category from './pages/Category';
import Cart from './pages/Cart';
  
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/collections" element={<Collection/>}/>
    <Route path="/individual" element={<Individual/>}/>
    <Route path="/singlecollection" element={<SingleCollection/>}/>
    <Route path="/category" element={<Category/>}/>
    <Route path="/collections" element={<Collection/>}></Route>
    <Route path="/individual" element={<Individual/>}></Route>
    <Route path="/singlecollection" element={<SingleCollection/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
