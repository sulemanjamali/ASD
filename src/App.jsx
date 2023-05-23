import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Add_activity from "./components/Add_activity";
import Edit_Activity from "./components/Edit_activity";
import Activitylog from "./components/Activitylog"
import Card from "./components/Card"
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/addactivity" element={<Add_activity />}></Route>
        <Route path="/editactivity" element={<Edit_Activity />}></Route>
        <Route path="/Activitylog" element={<Activitylog />}></Route>
        <Route path="/card" element={<Card />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
