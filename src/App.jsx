
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import ShopContextProvider from './Context/ShopContext'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Ask from './Pages/Ask'
import Products from './Pages/Products'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
 
function App() {


  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
        <Routes>
           
          <Route path='/' element={<Layout/>}> 
          <Route index element={<Home/>}/>
         
          
          <Route path='/blogs' element={<Blogs/>}/> 
          <Route path='/shop' element={<Shop/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/signup' element={<Signup/>}/> 
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/checkout' element={<Checkout/>}/> 
          <Route path='/ask' element={<Ask/>}/> 
          <Route path='/product/:id' element={<Products/>}/> 


          </Route>
        </Routes>
        
        </BrowserRouter>
      </ShopContextProvider>
    </>
  )
}

export default App
