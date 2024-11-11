import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import { FaBeer, FaHeart, FaTrash } from "react-icons/fa";

function Myproducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
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
  }, []);

  const deleteItem=((Id)=>{
    axios.delete(`http://localhost:4000/itemdelete/${Id}`);
    window.location.assign('/myproducts');
    alert('Item is deleted');
  })
  return (
    <div>
      
   <Snavbar/>
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Books List</h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <div style={{height:"10px"}}> */}
        {items.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded shadow">
             <div style={{display:"flex",justifyContent:"flex-end",color:"red"}}>
                <button onClick={() => deleteItem(item._id)} style={{ border: 'none', color: 'red', background: 'none' }}>
                <FaTrash />
              </button>
                </div>
            <img
              src={`http://localhost:4000/${item.itemImage}`}
              alt="Item Image"
              className="rounded-t-lg" style={{height:"350px",width:"500px"}}
              // className="w-full h-50 object-cover mb-4 rounded"
            />
            <div>
              <p className="text-xl font-bold mb-2">{item.title}</p>
              <p className="text-gray-700 mb-2">Author: {item.author}</p>
              <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
              <p className="text-blue-500 font-bold">Price: ${item.price}</p>
              <p className="text-gray-600"><strong>Description:</strong>{item.description.slice(0,259)}  ...</p>

            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    // </div>
  );
}

export default Myproducts;
