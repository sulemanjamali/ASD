import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Add_activity from "./Add_activity";
import Edit_Activity from "./Edit_activity";
import Activitylog from "./Activitylog";
import Card from "./Card";

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
