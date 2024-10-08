import React from 'react'
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';

const Dashboard = () => {
    
  const stats = [
    { id: 1, name: 'ลูกค้ายืนยันแล้ว', value: '2,000' },
    { id: 2, name: 'รอลูกค้ายืนยัน', value: '2,000' },
    { id: 3, name: 'ออกเลขกรมธรรม์', value: '2,000' },
    { id: 4, name: 'ปฏิเสธออกเลขกรมธรรม์', value: '2,000' },

  ]
  
  const getBGColor = (id) => {
    switch (id) {
      case 1:
        return '#B3C9C8';
      case 2:
        return '#FFF7E6';
      case 3:
        return '#FFFFFF'; 
      case 4:
        return '#FFCCC7';
      default:
        return '#000000'; 
    }
  }

  const getTextColor = (id) => {
    switch (id) {
      case 1:
        return '#006F68';
      case 2:
        return '#FFC069';
      case 3:
        return '#8B8B8B'; 
      case 4:
        return '#F5222D'; 
      default:
        return '#000000'; 
    }
  }
  
  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
        <div className="w-[248px] bg-gray-100">
            <Menu />
        </div>
        <div className="flex-1 flex flex-col">
            <Header />
            <div className="py-4 pl-6 bg-white">
            <Nav pageName="MIA Customer Dashboard" />
            <div className="mt-4 text-4xl ">MIA Customer Dashboard</div>        
            </div>
            <div className="bg-black flex flex-col py-4">
              <div className="">
                <dl className="flex flex-wrap gap-x-8 gap-y-8 text-center">
                  {stats.map((stat) => (
                    <div 
                      key={stat.id} 
                      className="mx-auto flex flex-col justify-center items-center rounded-md gap-y-5 "
                      style={{ backgroundColor: getBGColor(stat.id),
                        paddingBottom: '0',
                        width: '262px', 
                        height: '151px', 
                      }}
                      >                      
                      <dt
                        className="text-2xl font-bold"
                        style={{ color: getTextColor(stat.id)}}
                      >
                        {stat.name}
                      </dt>
                      <dd className="text-3xl font-bold  sm:text-5xl"
                        style={{
                          marginBottom: '0',  
                        }}
                      >
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

        </div>
    </div>
  )


}
export default Dashboard;

