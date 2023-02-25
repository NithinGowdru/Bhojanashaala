import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import FoodList from "./FoodList";

const Searchfood = () => {
    let {searchkey}=useParams(); 

    let {data:items ,pending ,error}=useFetch("http://localhost:4001/items")


    return ( 
        <div className="home">
            {error && <h1  className="error" >{error}</h1>}
            {pending && <div className="loader"></div>}
            {items && <FoodList className="searchitem" items={items.filter( (food)=>{return food.foodName.toUpperCase().includes(searchkey.toUpperCase())  }   )
               } title="Search Result"   />
        }
        
            
            
                

        </div>
        

    )
}
 
export default Searchfood;