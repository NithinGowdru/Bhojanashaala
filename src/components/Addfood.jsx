import { useRef } from "react";
import { useHistory } from "react-router-dom";

const Addfood = () => {

    let history=useHistory()
    let foodname=useRef()
    let price=useRef()
    let rating=useRef()
    let pic=useRef()

    let handleAddFood=(e)=>{
        e.preventDefault();

        let newFood={foodName:foodname.current.value,
                     price:price.current.value,
                     type:"",
                     rating:rating.current.value,
                     pic:pic.current.value}
                     
        let options=document.getElementsByName("type")
        for(let i=0;i<options.length;i++){
            if(options[i].checked){
                newFood.type=options[i].value
            }
        }

        fetch("http://localhost:4000/items" ,{
                                                method:"POST",
                                                headers:{"Content-Type":"application/json"},
                                                body:JSON.stringify(newFood)
        }).then(()=>{
            alert("New Food added")
            history.goBack()
        })
        
    }


    return ( 
        <>
        <div className="container">
            <div className="inner">
            <h1>ADD FOOD ITEMS </h1>
                <form action="" onSubmit={handleAddFood}>
                    <div><label htmlFor="foodName">FoodName </label>
                    <input type="text" name="foodname" id="1" ref={foodname} /><br /></div>
                    <div> <label htmlFor="Price">Price </label>
                    <input type="text/number" ref={price}/><br /></div>
                    
                    <div className="typename">
                    <label htmlFor="type">Type </label>
                    <input type="radio" name="type" id="" /><label htmlFor="type">Veg</label>
                    <input type="radio" name="type" id="" /><label htmlFor="type">Non-Veg</label>
                    </div>
                    <div><label htmlFor="rating">Rating </label>
                    <input type="number" name="rating" id="2" step={0.1} min={0} max={10}  ref={rating} /><br /></div>
                    <div><label htmlFor="pic">Pic </label>
                    <input type="url" ref={pic}/><br /></div>
                    
                    <input type="submit" value="ADD ITEM"/>
                    
                    
                    
                    

                </form>
                </div>
        </div>
        
        </>
     )
}
 
export default Addfood;
