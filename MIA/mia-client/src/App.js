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
import PrivateRoute from './service/PrivateRoute';
import { AuthProvider } from './service/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />  
          <Route path="/signup" element={<PrivateRoute><Signup /></PrivateRoute>} />  
          <Route path="/forgotpassword" element={<Forgotpassword />} /> 
          <Route path="/" element={<PrivateRoute><Dashbord /></PrivateRoute>} />
          <Route path="/customer" element={<PrivateRoute><CustomerList /></PrivateRoute>} />
          <Route path="/customer/view/:id" element={<PrivateRoute><Customer mode="view" /></PrivateRoute>} />
          <Route path="/customer/create" element={<PrivateRoute><Customer mode="create" /></PrivateRoute>} />
          <Route path="/customer/update/:id" element={<PrivateRoute><Customer mode="update" /></PrivateRoute>} />
          <Route path="/insurance" element={<PrivateRoute><Insurance /></PrivateRoute>} />
          <Route path="/carbrandsetting" element={<PrivateRoute><CarBrandSetting /></PrivateRoute>} />
          <Route path="/adminuser" element={<PrivateRoute><AdminUser /></PrivateRoute>} />
          <Route path="/rolesetting" element={<PrivateRoute><RoleSetting /></PrivateRoute>} />
          <Route path="/pdpalog" element={<PrivateRoute><PDPALog /></PrivateRoute>} />
          <Route path="/pdpasetting" element={<PrivateRoute><PDPASetting /></PrivateRoute>} />
          <Route path="/installmentsetting" element={<PrivateRoute><InstallmentSetting /></PrivateRoute>} />
          <Route path="/projectsetting" element={<PrivateRoute><ProjectSetting /></PrivateRoute>} />
          <Route path="/statusinsurancesetting" element={<PrivateRoute><StatusInsuranceSetting /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App; 
