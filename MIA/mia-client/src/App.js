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

import CarBrand from './Components/MasterSetting/CarBrand';
import CarBrandList from './Components/MasterSetting/CarBrandList';

import AdminUser from './Components/Admin/AdminUser';
import AdminUserList from './Components/Admin/AdminUserList';
import RoleSetting from './Components/Admin/RoleSetting';
import RoleSettingList from './Components/Admin/RoleSettingList';
import PDPALog from './Components/Admin/PDPALog';
import PDPALogList from './Components/Admin/PDPALogList';
import PDPASetting from './Components/Admin/PDPASetting';
import PDPASettingList from './Components/Admin/PDPASettingList';

import Installment from './Components/SystemSetting/Installment';
import InstallmentList from './Components/SystemSetting/InstallmentList';
import ProjectSetting from './Components/SystemSetting/ProjectSetting';
import ProjectSettingList from './Components/SystemSetting/ProjectSettingList';
import StatusInsurance from './Components/SystemSetting/StatusInsurance';
import StatusInsuranceList from './Components/SystemSetting/StatusInsuranceList';

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

          <Route path="/carbrand" element={<PrivateRoute><CarBrandList /></PrivateRoute>} />
          <Route path="/carbrand/view/:id" element={<PrivateRoute><CarBrand mode="view"/></PrivateRoute>}/>
          <Route path="/carbrand/create" element={<PrivateRoute><CarBrand  mode="create"/></PrivateRoute>} />
          <Route path="/carbrand/update/:id" element={<PrivateRoute><CarBrand mode="update"/></PrivateRoute>}/>

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


          <Route path="/installment" element={<PrivateRoute><InstallmentList/></PrivateRoute>} />
          <Route path="/installment/view/:id" element={<PrivateRoute><Installment mode="view"/></PrivateRoute>}/>
          <Route path="/installment/create" element={<PrivateRoute><Installment mode="create"/></PrivateRoute>} />
          <Route path="/installment/update/:id" element={<PrivateRoute><Installment mode="update"/></PrivateRoute>}/>
          <Route path="/projectsetting" element={<PrivateRoute><ProjectSettingList/></PrivateRoute>} />
          <Route path="/projectsetting/view/:id" element={<PrivateRoute><ProjectSetting mode="view"/></PrivateRoute>}/>
          <Route path="/projectsetting/create" element={<PrivateRoute><ProjectSetting mode="create"/></PrivateRoute>} />
          <Route path="/projectsetting/update/:id" element={<PrivateRoute><ProjectSetting mode="update"/></PrivateRoute>}/>
          <Route path="/statusinsurance" element={<PrivateRoute><StatusInsuranceList/></PrivateRoute>} />
          <Route path="/statusinsurance/view/:id" element={<PrivateRoute><StatusInsurance mode="view"/></PrivateRoute>}/>
          <Route path="/statusinsurance/create" element={<PrivateRoute><StatusInsurance mode="create"/></PrivateRoute>} />
          <Route path="/statusinsurance/update/:id" element={<PrivateRoute><StatusInsurance mode="update"/></PrivateRoute>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App; 
