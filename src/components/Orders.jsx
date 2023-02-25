import { useEffect, useState } from "react";
import FoodList from "./FoodList";


const Orders = () => {
    
    let [orders,setOrders]=useState(null)

    
             useEffect(  ()=>{
                let foodOrdered=localStorage.getItem("orders");
                foodOrdered=JSON.parse(foodOrdered);
                setOrders(foodOrdered);
                
             },[] )          

    return ( 
        <>
        {orders && <FoodList items={orders} title="FOOD ORDERED"/>}
        </>
        
     );
}
 
export default Orders;