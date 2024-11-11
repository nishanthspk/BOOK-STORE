import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './User/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './User/Signup';
import Unavbar from './User/Unavbar';
import Addbook from './Seller/Addbook';
import Item from './Seller/Book';
import Myproducts from './Seller/Myproducts';
import Slogin from './Seller/Slogin';
import Book from './Seller/Book';
import Orders from './Seller/Orders';
import Products from './User/Products';
import Uitem from './User/Uitem';
import Myorders from './User/Myorders';
import Uhome from './User/Uhome';
import OrderItem from './User/OrderItem';
import Shome from './Seller/Shome';
import Ssignup from './Seller/Ssignup';
import Home from './Componenets/Home';
import Alogin from './Admin/Alogin';
import Asignup from './Admin/Asignup';
import Ahome from './Admin/Ahome';
import Users from './Admin/Users';
import Vendors from './Admin/Seller';
import Seller from './Admin/Seller';
import Wishlist from './User/Wishlist';
// import './App.css'

function App() {
  return (
      <div>
       
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home/>} />


      {/* Admin */}
      <Route path='/alogin' element={<Alogin/>} />
      <Route path='/asignup' element={<Asignup/>} />
      <Route path='/ahome' element={<Ahome/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/sellers' element={<Seller/>} />



           {/* seller */}
        <Route path='/slogin' element={<Slogin/>} />
      <Route path='/ssignup' element={<Ssignup/>} />
       <Route path='/shome' element={<Shome/>} />
       <Route path='/myproducts' element={<Myproducts/>} />
       <Route path='/addbook' element={<Addbook/>} />
       <Route path='/book/:id' element={<Book/>} />
       <Route path='/orders' element={<Orders/>} />

      {/* user */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>} />
        <Route path='/nav' element={<Unavbar/>}/>
         <Route path='/uhome' element={<Uhome/>} />
         <Route path='/uproducts' element={<Products/>} />
       <Route path='/uitem/:id' element={<Uitem/>} />
       <Route path="/orderitem/:id" element={<OrderItem/>} />
       <Route path="/myorders" element={<Myorders />} />
       <Route path="/wishlist" element={<Wishlist />} />

       </Routes>
       </BrowserRouter>


      </div>
  )
}

export default App
