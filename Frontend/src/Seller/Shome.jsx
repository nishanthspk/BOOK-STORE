
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Snavbar from './Snavbar';
import Footer from '../Componenets/Footer';


function Shome() {
   
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
      // Fetch items data
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user)
      if (user) {
        axios
          .get(`http://localhost:4000/getitem/${user.id}`)
          .then((response) => {
            console.log('Response data:', response.data); // Log the response data
            const taskData = response.data;
            setItems(taskData);
          })
          .catch((error) => {
            console.error('Error fetching tasks: ', error);
          });
      } else {
        console.log('ERROR');
      }

      // Fetch orders data
     axios.get(`http://localhost:4000/getsellerorders/${user.id}`)
    .then((response) => {
      setOrders(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });
  }, []);
 
  const colors = ['#2B124C', '#AE4451', '#F39F5A','orange'];

  // Calculate the number of users and bookings

  const totalItems = items.length;
  const totalOrders = orders.length;

  // Define data for the bar chart
  const data = [
   
    { name: 'Items', value: totalItems, fill: 'blue' }, 
    { name: 'Orders', value: totalOrders, fill: 'orange' }, 
  ];
  return (
    <div>
        <Snavbar/>
        <br/>
      <h3 className="text-3xl font-semibold mb-4 text-center" >DashBoard</h3>
      <Card body style={{ backgroundColor: "wheat", width: "80%", marginLeft: "10%", marginTop: "20px", height: "580px" }}>
        <div className="flex justify-around items-center p-4">
          
         <Link to="/myproducts" style={{textDecoration:"none"}}>
          <div className="w-64 h-32 bg-green-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
           Items <br /> <br />{totalItems}
         </div>
         </Link>
         <Link to="/orders" style={{textDecoration:"none"}}>
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
       </Card> <br/>
   <Footer/>
    </div>
  );
}

export default Shome;
