import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import MenuRes from "./components/MenuRes";
import "./general.scss";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="general-container">
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>  
          <Route path="/profile" element={<Profile/>}/>  
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
