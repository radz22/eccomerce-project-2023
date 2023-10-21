import React, {createContext, useState} from "react"
import { product } from "../data/data"
export const ShopContext = createContext(null)

const getDefault = () => {
  let cart = {}

  for(let i = 1 ; i < product.length + 1; i++ ){
    cart[i] = 0
  }

  return cart;
}

const ShopContextProvider = (props) => {

 const [cartItem, setCartItem] = useState(getDefault())


 const getTotalAmount = () => {
  let total = 0;
  for (let item in cartItem){
   
    if(cartItem[item] > 0 ){
      let itemInfo = product.find((products) => products.id == parseInt(item))
      total += cartItem[item] * itemInfo.price
    }
 }

 return total
 }

 const addToCart = (itemId) => {
     setCartItem((parameter) => ({...parameter, [itemId] : parameter[itemId] + 1}))
 }

 const removeToCart = (itemId) => {
  setCartItem((parameter) => ({...parameter, [itemId] : parameter[itemId] - 1}))
}




  const [button,setButton] = useState(false)
  const [navbar,setNavbar] = useState(false)

  const handleClick = () => {
     setButton(!button)
  }

  const handleNavbar = () => {
    setNavbar(!navbar)
 }
    const contextValue = {handleClick, button , handleNavbar, navbar , addToCart , cartItem , removeToCart , getTotalAmount}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider