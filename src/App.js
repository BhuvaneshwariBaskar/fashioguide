import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Individual from "./pages/Individual";
import SingleCollection from "./pages/SingleCollection";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/individual" element={<Individual />} />
            <Route path="/singlecollection" element={<SingleCollection user={user}/>} />
            <Route path="/category" element={<Category />} />
            <Route path="/collections" element={<Collection user={user}/>} />
            <Route path="/individual" element={<Individual />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
            <Route path="/home" element={<Home />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/individual" element={<Individual />} />
            <Route path="/singlecollection" element={<SingleCollection />} />
            <Route path="/category" element={<Category />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/individual" element={<Individual />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
        
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
