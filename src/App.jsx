import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Error from "./components/Error";
import Search from "./components/Search";
import Login from "./components/Login";

import Onlinecom from "./components/Onlinecom";
import Feedback from "./components/Feedback";

import Humanright from "./components/Humanright";
import Donate from "./Donation/Donate";
import Register from "./components/Register";
import Admin from "./Adminpanel/Admin";

import { AdminDashboard } from "./Adminpanel/AdminDashboard";
import Adminbook from "./Adminpanel/Adminbook";
import BookList from "./components/Booklist";
import Responses from "./components/Responses";









function App() {
  return (
    <>
    <BrowserRouter>
   
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList/>}/>
        
       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
        <Route path="/Onlinecom" element={<Onlinecom />} />
        <Route path="/Feedback" element={<Feedback />} />
      
        <Route path="/humanright" element={<Humanright />} />
        <Route path="/Donation" element={<Donate />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="AdminDashboard" element={<AdminDashboard/>} />
        <Route path="Adminbook" element={<Adminbook/>} />
        <Route path="/Response" element={<Responses/>} />
      
    
       
       
       
       
      </Routes>
    
    </BrowserRouter>
   
    </>
  );
}

export default App;