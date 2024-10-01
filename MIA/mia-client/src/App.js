import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Forgotpassword from './Components/Forgotpassword/Forgotpassword';
import CustomerList from './Components/Customer/CustomerList';
import CustomerView from './Components/Customer/CustomerView';
import { CustomerCreate } from './Components/Customer/CustomerCreate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomerUpdate } from './Components/Customer/CustomerUpdate';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />  {/* เส้นทางหน้า Login */}
          <Route path="signup" element={<Signup />} />  {/* เส้นทางหน้า Signup */}
          <Route path="forgotpassword" element={<Forgotpassword/>} /> {/* เส้นทางหน้า Forgotpassword */}
          <Route path="customerlist" element={<CustomerList/>} />  {/* เส้นทางหน้า CustomerList */}
          <Route path="customerview/:id" element={<CustomerView/>} />
          <Route path="customercreate" element={<CustomerCreate/>} />  {/* เส้นทางหน้า CustomerCreate */}
          <Route path="customerupdate/:id" element={<CustomerUpdate/>} />
        </Routes>
    </Router>
  );
}

export default App; 
