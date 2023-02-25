import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Updatefood = () => {
    let {id}=useParams()
    let history=useHistory()
    
    let [foodName,setFoodname]=useState("")
    let [price,setPrice]=useState("")
    let [type,setType]=useState("")
    let [rating,setRating]=useState("")
    let [pic,setPic]=useState("")

useEffect(()=>{
    fetch("http://localhost:4000/items/"+id)
    .then(res=>res.json())
    .then((data)=>{
        setFoodname(data.foodName)
        setPrice(data.price)
        setRating(data.price)
        setPic(data.pic)
    })
},[])


    let handleUpdateFood=(e)=>{
        e.preventDefault();            //Prevent auto refreshing

        let updatedFood={foodName,price,type,rating,pic}
        fetch("http://localhost:4000/items/"+id ,{
                                                method:"PUT",
                                                headers:{"Content-Type":"application/json"},
                                                body:JSON.stringify(updatedFood)
        }).then(()=>{
            alert("Food is updated")
            history.push("/")
        })
        
    }


    return ( 
        <>
        <div className="container">
            <div className="inner">
            <h1>UPDATE FOOD ITEMS </h1>
                <form action="" onSubmit={handleUpdateFood}>
                    <div><label htmlFor="foodName">FoodName </label>
                    <input type="text" name="foodname" id="1" value={foodName} onChange={(e)=>{setFoodname(e.target.value)}} /><br /></div>
                    <div> <label htmlFor="Price">Price </label>
                    <input type="text/number" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br /></div>
                    
                    <div className="typename">
                    <label htmlFor="type">Type </label>
                    <input type="radio" name="type" id="" /><label htmlFor="type">Veg</label>
                    <input type="radio" name="type" id="" /><label htmlFor="type">Non-Veg</label>
                    </div>
                    <div><label htmlFor="rating">Rating </label>
                    <input type="number" name="rating" id="2" step={0.1} min={0} max={10}  value={rating} onChange={(e)=>{setRating(e.target.value)}} /><br /></div>
                    <div><label htmlFor="pic">Pic </label>
                    <input type="url" value={pic} onChange={(e)=>{setPic(e.target.value)}}/><br /></div>
                    
                    <input className="submit" type="submit" value="UPDATE ITEM"/>
                    
                    
                    
                    

                </form>
                </div>
        </div>
        
        </>
     )
}
 
export default Updatefood;
