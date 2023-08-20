import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm"
import './App.css'
import './index.css'

function App() {  
  return (
    <>
<div>
    <h1>Welcome to Strangers Things</h1>
   
  </div>
    <div id='navbar'>
    <NavBar />
  <div className="main-section">
    <Routes>
      <Route path="/" element={<h1>/insert something here/</h1>} />
      <Route path="/AllPosts" element= {<AllPosts />}/>
      <Route path="/SignUpForm" element= {<SignUpForm/>}/>
    </Routes>
    </div>
    </div>
</>
  );
}

export default App;