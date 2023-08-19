import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import NavBar from "./components/NavBar";
import './App.css'

function App() {  
  return (
    <>
  <div id="navbar">
    <h1>Welcome to Strangers Things!</h1>
    <NavBar />
  <div className="main-section">
    <Routes>
      <Route path="/" element={<h1>/insert something here/</h1>} />
      <Route path="/AllPosts" element= {<AllPosts />}/>
    </Routes>
    </div>
    </div>
</>
  );
}

export default App;