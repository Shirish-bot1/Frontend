import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";



import { Contact } from "./components/Contact";
import Error from "./components/Error";

import Login from "./components/Login";

import Onlinecom from "./components/Onlinecom";


import Humanright from "./components/Humanright";
import Donate from "./Donation/Donate";
import Register from "./components/Register";
import Admin from "./Adminpanel/Admin";

import { AdminDashboard } from "./Adminpanel/AdminDashboard";
import Adminbook from "./Adminpanel/Adminbook";
import BookList from "./components/Booklist";

import About from "./components/About";
import AdminBlog from "./Adminpanel/Adminblog";
import Eerror from "./components/Eerror";




import AdminText from "./Adminpanel/AdminText";
import Adminphotos from "./Adminpanel/Adminphotos";
import AdminDonations from "./Adminpanel/AdminDonation";
import { AuthProvider } from "./Authenticator";
import AdminDonationPanel from "./Adminpanel/AdminDonationpanel";

import Admincreatephotohome from "./Adminpanel/Admincreatephotohome";
import Adminhome from "./Adminpanel/Adminhome";
import Adminhometext from "./Adminpanel/Adminhometext";
import DonationStatspanel from "./Adminpanel/DonationStatspanel";
import HeaderNav from "./Navbar/HeaderNav";
import Asuccess from "./components/Asuccess";
import { PaymentSuccess } from "./Donation/PaymentSuccess";














function App() {

  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    
   
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList/>}/>
        <Route path="/Adminblog" element={<AdminBlog/>}/>
        
       
        <Route path="/about" element={<About  />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="*" element={<Error />} />
        <Route path="/Onlinecom" element={<Onlinecom />} />
 
      
        <Route path="/humanright" element={<Humanright />} />
        <Route path="/Donation" element={<Donate />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
        <Route path="Adminbook" element={<Adminbook/>} />
   
        <Route path="/Success" element={<Asuccess/>} />
        <Route path="/Eerror" element={<Eerror/>} />
    
        <Route path="/AdminText" element={<AdminText/>} />
        <Route path="/Adminphotos" element={<Adminphotos/>} />
        <Route path="/AdminDonation" element={<AdminDonations/>} />
        <Route path="/AdminDonationpay" element={<AdminDonationPanel/>} />
        <Route path="/AdminHome" element={<Adminhome/>} />
        <Route path="/AdminHomecreate" element={<Admincreatephotohome/>} />
        <Route path="/AdminHometext" element={<Adminhometext/>} />
        <Route path="/Donatestat" element={<DonationStatspanel/>} />
        <Route path="/HeaderNav" element={<HeaderNav/>} />
        <Route path="/payment-success" element={<PaymentSuccess/>} />
      
  
      
    
       
       
       
       
      </Routes>
      </AuthProvider>

    
    </BrowserRouter>
   
    </>
  );
}

export default App;