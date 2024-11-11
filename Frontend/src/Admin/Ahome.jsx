
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Ahome() {
//   const [users, setUsers] = useState([]);
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     // Fetch user data
//     axios.get(`http://localhost:8000/getusers`)
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching users: ', error);
//       });

//     // Fetch booking data
//     axios.get(`http://localhost:8000/getrides`)
//       .then((response) => {
//         setCars(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching bookings: ', error);
//       });
//   }, []);

//   // Calculate the number of users and bookings
//   const totalUsers = users.length;
//   const totalBookings = cars.length;

//   // Define data for the pie chart
//   const data = [
//     { name: 'Users', value: totalUsers },
//     { name: 'Bookings', value: totalBookings },
//   ];
  
//   // Define colors for the chart
//   const colors = [ 'green','#2B124C', ];

//   return (
//     <div>
//       <h1 className="text-center">Users and Bookings Pie Chart</h1>
      
//       <Card body style={{ background: "white", width: "80%", marginLeft: "17%", marginTop: "20px", height: "650px" }}>
//         <div className="flex justify-around items-center p-4">
//           <Link to="/bookings" style={{textDecoration:"none"}}>
//           <div className="w-64 h-32 bg-blue-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800">
//             USERS <br /> <br />{totalUsers}
//           </div>
//           </Link>
//           <Link to="/bookings" style={{textDecoration:"none"}}>
//           <div className="w-64 h-32 bg-yellow-400 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800">
//             BOOKINGS <br /> <br /> {totalBookings}
//           </div>
//           </Link>
//         </div>
//         <Card>
        
//         <PieChart width={400} height={400}>
//         <Pie
//           dataKey="value"
//           data={data}
//           cx={200}
//           cy={200}
//         //   innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           label >
        
//           {data.map((entry,index)=>(
//              <Cell key={`cell-${index}`} fill={colors[index]} />
//           ))}
//         </Pie>
//         <Tooltip />
//         <Legend />
//       </PieChart>
//         </Card>
//       </Card>
     
//     </div>
//   );
// }

// export default Ahome;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';

function Ahome() {
  const [users, setUsers] = useState([]);
  const [vendors,setVendors]=useState([])
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get(`http://localhost:4000/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users: ', error);
      });

    // Fetch vendors data
    axios.get(`http://localhost:4000/sellers`)
      .then((response) => {
        setVendors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings: ', error);
      });

      // Fetch items data
    axios.get(`http://localhost:4000/item`)
    .then((response) => {
      setItems(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });

      // Fetch orders data
    axios.get(`http://localhost:4000/orders`)
    .then((response) => {
      setOrders(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });
  }, []);
 
  const colors = ['#2B124C', '#AE4451', '#F39F5A','orange'];

  // Calculate the number of users and bookings
  const totalUsers = users.length;
  const totalvendors = vendors.length;
  const totalItems = items.length;
  const totalOrders = orders.length;

  // Define data for the bar chart
  const data = [
    { name: 'Users', value: totalUsers, fill: '#2B124C' }, 
    { name: 'vendors', value: totalvendors, fill: 'cyan' },
    { name: 'Items', value: totalItems, fill: 'blue' }, 
    { name: 'Orders', value: totalOrders, fill: 'orange' }, 
  ];
  return (
    <div>
        <Anavbar/>
      <h3 className="text-center" style={{color:""}}>DashBoard</h3>
      <Card body style={{ background: "white", width: "80%", marginLeft: "10%", marginTop: "20px", height: "580px" }}>
        <div className="flex justify-around items-center p-4">
           <Link to="/users" style={{textDecoration:"none"}}>
          <div className="w-64 h-32 bg-red-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
           USERS <br /> <br />{totalUsers}
         </div>
         </Link> 
        <Link to="/vendors" style={{textDecoration:"none"}}>
         <div className="w-64 h-32 bg-blue-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
           Vendors <br /> <br /> {totalvendors}
         </div>
         </Link>
         <Link to="/vendors" style={{textDecoration:"none"}}>
          <div className="w-64 h-32 bg-green-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
           Items <br /> <br />{totalItems}
         </div>
         </Link>
         <Link to="/users" style={{textDecoration:"none"}}>
          <div className="w-64 h-32 bg-yellow-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
           Total Orders <br /> <br />{totalOrders}
         </div>
         </Link>
       </div>
       <br/>
       <br/>
       <br/>
       <div style={{paddingLeft:"350px"}}>
       <BarChart width={400} height={300} data={data} >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip   />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" barSize={50} />
          
        </BarChart>
       </div>
       </Card>
   
    </div>
  );
}

export default Ahome;
