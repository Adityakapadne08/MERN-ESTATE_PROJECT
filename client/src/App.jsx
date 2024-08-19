/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";

import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  //return <h1 className='text-red-500'>App</h1>
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}
