import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Forgotpassword from './Components/Forgotpassword/Forgotpassword';
import Dashbord from './Components/Homepage/Dashboard'
import Customer from './Components/Customer/Customer';
import CustomerList from './Components/Customer/CustomerList';
import Insurance from './Components/Insurance/Insurance';
import CarBrandSetting from './Components/MasterSetting/CarBrandSetting';
import AdminUser from './Components/Admin/AdminUser';
import RoleSetting from './Components/Admin/RoleSetting';
import PDPALog from './Components/Admin/PDPALog';
import PDPASetting from './Components/Admin/PDPASetting';
import InstallmentSetting from './Components/SystemSetting/InstallmentSetting';
import ProjectSetting from './Components/SystemSetting/ProjectSetting';
import StatusInsuranceSetting from './Components/SystemSetting/StatusInsuranceSetting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />  {/* เส้นทางหน้า Login */}
          <Route path="signup" element={<Signup />} />  {/* เส้นทางหน้า Signup */}
          <Route path="forgotpassword" element={<Forgotpassword/>} /> {/* เส้นทางหน้า Forgotpassword */}
          <Route path="/dashbord" element={<Dashbord/>}/>
          <Route path="/customer" element={<CustomerList/>} />  {/* เส้นทางหน้า CustomerList */}
          <Route path="/customer/view/:id" element={<Customer mode="view"/>}/>
          <Route path="/customer/create" element={<Customer mode="create"/>}/>
          <Route path="/customer/update/:id" element={<Customer mode="update"/>}/>
          <Route path="/insurance" element={<Insurance/>}/>
          <Route path="/carbrandsetting" element={<CarBrandSetting/>}/>
          <Route path="/adminuser" element={<AdminUser/>}/>
          <Route path="/rolesetting" element={<RoleSetting/>}/>
          <Route path="/pdpalog" element={<PDPALog/>}/>
          <Route path="/pdpasetting" element={<PDPASetting/>}/>
          <Route path="/installmentsetting" element={<InstallmentSetting/>}/>
          <Route path="/projectsetting" element={<ProjectSetting/>}/>
          <Route path="/statusinsurancesetting" element={<StatusInsuranceSetting/>}/>
        </Routes>
    </Router>
  );
}

export default App; 
