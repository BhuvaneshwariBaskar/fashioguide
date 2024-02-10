import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Individual from "./Pages/Individual";
import SingleCollection from "./Pages/SingleCollection";
import Category from "./Pages/Category";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import { useSelector } from "react-redux";
import TryOn from "./Pages/TryOn";
import Fav from "./Pages/Fav";

function App() {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/individual" element={<Individual user={user}/>} />
            <Route path="/singlecollection" element={<SingleCollection user={user}/>} />
            <Route path="/category" element={<Category />} />
            <Route path="/collections" element={<Collection user={user} />} />
            <Route path="/cart" element={<Cart user={user} />} />
            <Route path="/fav" element={<Fav user={user}/>} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="tryon" element={<TryOn />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
