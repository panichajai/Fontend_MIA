import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Forgotpassword from './Components/Forgotpassword/Forgotpassword';
import Dashbord from './Components/Homepage/Dashboard'

import Customer from './Components/Customer/Customer';
import CustomerList from './Components/Customer/CustomerList';

import Insurance from './Components/Insurance/Insurance';
import InsuranceList from './Components/Insurance/InsuranceList';

import CarBrandSetting from './Components/MasterSetting/CarBrandSetting';
import CarBrandSettingList from './Components/MasterSetting/CarBrandSettingList';

import AdminUser from './Components/Admin/AdminUser';
import AdminUserList from './Components/Admin/AdminUserList';
import RoleSetting from './Components/Admin/RoleSetting';
import RoleSettingList from './Components/Admin/RoleSettingList';
import PDPALog from './Components/Admin/PDPALog';
import PDPALogList from './Components/Admin/PDPALogList';
import PDPASetting from './Components/Admin/PDPASetting';
import PDPASettingList from './Components/Admin/PDPASettingList';

import InstallmentSetting from './Components/SystemSetting/InstallmentSetting';
import InstallmentSettingList from './Components/SystemSetting/InstallmentSettingList';
import ProjectSetting from './Components/SystemSetting/ProjectSetting';
import ProjectSettingList from './Components/SystemSetting/ProjectSettingList';
import StatusInsuranceSetting from './Components/SystemSetting/StatusInsuranceSetting';
import StatusInsuranceSettingList from './Components/SystemSetting/StatusInsuranceSettingList';

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

          <Route path="/insurance" element={<PrivateRoute><InsuranceList/></PrivateRoute>} />
          <Route path="/insurance/view/:id" element={<PrivateRoute><Insurance mode="view"/></PrivateRoute>}/>
          <Route path="/insurance/create" element={<PrivateRoute><Insurance mode="create"/></PrivateRoute>}/>
          <Route path="/insurance/update/:id" element={<PrivateRoute><Insurance mode="update"/></PrivateRoute>}/>

          <Route path="/carbrandsetting" element={<PrivateRoute><CarBrandSettingList /></PrivateRoute>} />
          <Route path="/carbrandsetting/view/:id" element={<PrivateRoute><CarBrandSetting mode="view"/></PrivateRoute>}/>
          <Route path="/carbrandsetting/create" element={<PrivateRoute><CarBrandSetting  mode="create"/></PrivateRoute>} />
          <Route path="/carbrandsetting/update/:id" element={<PrivateRoute><CarBrandSetting mode="update"/></PrivateRoute>}/>

          <Route path="/adminuser" element={<PrivateRoute><AdminUserList/></PrivateRoute>} />
          <Route path="/adminuser/view/:id" element={<PrivateRoute><AdminUser mode="view"/></PrivateRoute>}/>
          <Route path="/adminuser/create" element={<PrivateRoute><AdminUser mode="create"/></PrivateRoute>} />
          <Route path="/adminuser/update/:id" element={<PrivateRoute><AdminUser mode="update"/></PrivateRoute>}/>
          <Route path="/rolesetting" element={<PrivateRoute><RoleSettingList/></PrivateRoute>} />
          <Route path="/rolesetting/create" element={<PrivateRoute><RoleSetting /></PrivateRoute>} />
          <Route path="/pdpalog" element={<PrivateRoute><PDPALogList/></PrivateRoute>} />
          <Route path="/pdpalog/create" element={<PrivateRoute><PDPALog/></PrivateRoute>} />
          <Route path="/pdpasetting" element={<PrivateRoute><PDPASettingList/></PrivateRoute>} />
          <Route path="/pdpasetting/view/:id" element={<PrivateRoute><PDPASetting mode="view"/></PrivateRoute>}/>
          <Route path="/pdpasetting/create" element={<PrivateRoute><PDPASetting mode="create"/></PrivateRoute>} />
          <Route path="/pdpasetting/update/:id" element={<PrivateRoute><PDPASetting mode="update"/></PrivateRoute>}/>


          <Route path="/installmentsetting" element={<PrivateRoute><InstallmentSettingList/></PrivateRoute>} />
          <Route path="/installmentsetting/view/:id" element={<PrivateRoute><InstallmentSetting mode="view"/></PrivateRoute>}/>
          <Route path="/installmentsetting/create" element={<PrivateRoute><InstallmentSetting mode="create"/></PrivateRoute>} />
          <Route path="/installmentsetting/update/:id" element={<PrivateRoute><InstallmentSetting mode="update"/></PrivateRoute>}/>
          <Route path="/projectsetting" element={<PrivateRoute><ProjectSettingList/></PrivateRoute>} />
          <Route path="/projectsetting/view/:id" element={<PrivateRoute><ProjectSetting mode="view"/></PrivateRoute>}/>
          <Route path="/projectsetting/create" element={<PrivateRoute><ProjectSetting mode="create"/></PrivateRoute>} />
          <Route path="/projectsetting/update/:id" element={<PrivateRoute><ProjectSetting mode="update"/></PrivateRoute>}/>
          <Route path="/statusinsurancesetting" element={<PrivateRoute><StatusInsuranceSettingList/></PrivateRoute>} />
          <Route path="/statusinsurancesetting/view/:id" element={<PrivateRoute><StatusInsuranceSetting mode="view"/></PrivateRoute>}/>
          <Route path="/statusinsurancesetting/create" element={<PrivateRoute><StatusInsuranceSetting mode="create"/></PrivateRoute>} />
          <Route path="/statusinsurancesetting/update/:id" element={<PrivateRoute><StatusInsuranceSetting mode="update"/></PrivateRoute>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App; 
