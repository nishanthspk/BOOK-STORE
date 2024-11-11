


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Vnavbar from './Snavbar';

const Book = () => {
  const [item, setItem] = useState(null); // Initialize item as null

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/item/${id}`)
      .then((resp) => {
        console.log(resp);
        setItem(resp.data); // Set item to the fetched data (an object, not an array)
      })
      .catch(() => {
        console.log("Did not get data");
      });
  }, [id]); // Include 'id' as a dependency to re-fetch data when the ID changes

  return (
    <div>
        <Vnavbar/>
      <br/>
      {item && (
        <div>
            <div style={{display:"flex",justifyContent:"center",height:"450px"}} >
            <img src={`http://localhost:4000/${item?.itemImage}`} alt={`${item.itemtype} Image`}  />
                </div>
                <h1 className='text-center'> {item.itemtype}-{item._id.slice(3,7)}</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div style={{ width: '38%',marginLeft:"150px" }}>
    <h2 style={{color:"grey"}}><strong>Description</strong></h2>
    <hr style={{height:"3px",backgroundColor:"black"}}/>
    <p style={{fontSize:"20px"}}>{item.description}</p>
  </div>
  <div style={{ marginRight: '300px' }}>
    <h2 style={{color:"grey"}}><strong>Info</strong></h2>
    
    <hr style={{height:"3px",backgroundColor:"black"}}/>
    <p style={{fontSize:"20px"}}>Price:  {item.price}</p>
    <p style={{fontSize:"20px"}}>Warranty:  1 year</p>
    <p style={{fontSize:"20px"}}>Seller:  {item.userName}</p>
  </div>
</div>

                
        </div>
      )}
      
    </div>
  );
};

export default Book;
