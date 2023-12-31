import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import AllPosts from "./components/AllPosts";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import LogIn from "./components/LogIn";
import Item from "./components/Item";
import "./App.css";
import "./index.css";

function App() {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
      <div>
        <h1>Welcome to Strangers Things</h1>
      </div>
      <div id="navbar">
        <NavBar />
        <div className="main-section">
          <Routes>
            <Route
              path="/"
              element={!loggedIn && <LogIn setLoggedIn={setLoggedIn} />}
            />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/AllPosts" element={<AllPosts />} />
            <Route path="/SignUpForm" element={<SignUpForm />} />
            {/* <Authenticate token={token} setToken={setToken}/> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
