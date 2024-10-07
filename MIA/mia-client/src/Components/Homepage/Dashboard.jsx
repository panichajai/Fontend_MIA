import React from 'react'
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';

const Dashboard = () => {
    
  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
        <div className="w-[248px] bg-gray-100">
            <Menu />
        </div>
        <div className="flex-1 flex flex-col">
            <Header />
            <div className="py-4 pl-6 bg-white">
            <Nav />
            <div className="mt-4 text-4xl ">ลูกค้า</div>        
            </div>
            <div>Dashboard</div>
        </div>
    </div>
  )


}
export default Dashboard;

