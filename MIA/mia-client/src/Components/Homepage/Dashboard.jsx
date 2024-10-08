import React, { useRef, useEffect } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import Chart from 'chart.js/auto';


const Dashboard = () => {
    
  const stats = [
    { id: 1, name: 'ลูกค้ายืนยันแล้ว', value: '2,000' },
    { id: 2, name: 'รอลูกค้ายืนยัน', value: '2,000' },
    { id: 3, name: 'ออกเลขกรมธรรม์', value: '2,000' },
    { id: 4, name: 'ปฏิเสธออกเลขกรมธรรม์', value: '2,000' },

  ]
  
  const getBoxStyles = (id) => {
    switch (id) {
      case 1:
        return { backgroundColor: '#B3C9C8', borderColor: '#006F68' }; 
      case 2:
        return { backgroundColor: '#FFF7E6', borderColor: '#FFC069' }; 
      case 3:
        return { backgroundColor: '#FFFFFF', borderColor: '#8B8B8B' }; 
      case 4:
        return { backgroundColor: '#FFCCC7', borderColor: '#F5222D' }; 
      default:
        return { backgroundColor: '#000000', borderColor: '#000000' }; 
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

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['28/6/2567', '29/6/2567', '30/6/2567', '1/7/2567', '2/7/2567', '3/7/2567', '4/7/2567'], // วันที่
        datasets: [
          {
            label: 'รอลูกค้ายืนยัน',
            backgroundColor: '#FFC107', 
            data: [400, 1500, 1500, 750, 1400, 1800, 1300], 
          },
          {
            label: 'ลูกค้ายืนยันแล้ว',
            backgroundColor: '#28A745', 
            data: [1850, 1800, 750, 750, 500, 450, 1750],
          },
          {
            label: 'ออกเอกสารกรมธรรม์',
            backgroundColor: '#6C757D', 
            data: [1000, 750, 1800, 1600, 900, 750, 750], 
          },
          {
            label: 'ปฏิเสธออกเอกสารกรมธรรม์',
            backgroundColor: '#DC3545', 
            data: [750, 500, 1400, 1100, 400, 2000, 1250], 
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return value.toLocaleString(); 
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  
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
        <div className=" flex flex-col p-10 gap-4" 
          style={{ backgroundColor: '# F4F8FA' }}>
          <dl className="flex flex-wrap gap-x-8 gap-y-8 text-center">
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className="w-full mx-auto flex flex-col justify-center items-center rounded-3xl gap-y-5 border-2"
                style={{ 
                  ...getBoxStyles(stat.id),
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
          <div className="flex flex-col gap-2 bg-white p-6 rounded-3xl gap-4">
            <div className="flex flex-col justify-center items-center">
              <canvas ref={chartRef} className="" />
            </div>
            <table className="min-w-full table-auto ">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-2 py-2">สถานะ</th>
                  <th className="py-2">28/6/2567</th>
                  <th className="py-2">29/6/2567</th>
                  <th className="py-2">30/6/2567</th>
                  <th className="py-2">1/7/2567</th>
                  <th className="py-2">2/7/2567</th>
                  <th className="py-2">3/7/2567</th>
                  <th className="py-2">4/7/2567</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-2">รอลูกค้ายืนยัน</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                </tr>
                <tr>
                  <td className="px-2 py-2">ลูกค้ายืนยันแล้ว</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                </tr>
                <tr>
                  <td className="px-2 py-2">ออกเอกสารกรมธรรม์</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                </tr>
                <tr>
                  <td className="px-2 py-2">ปฏิเสธออกเอกสารกรมธรรม์</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                  <td className="py-2">2,000</td>
                </tr>
                <tr className="font-bold">
                  <td className="px-2 py-2">ยอดสะสม</td>
                  <td className="py-2">8,000</td>
                  <td className="py-2">8,000</td>
                  <td className="py-2">8,000</td>
                  <td className="py-2">8,000</td>
                  <td className="py-2">8,000</td>
                  <td className="py-2">8,000</td>
                  <td className="py-2">8,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Dashboard;

