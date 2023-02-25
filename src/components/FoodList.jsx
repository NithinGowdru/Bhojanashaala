import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Foodlist = ( {items , title } ) => {
    
    let [ordersId , setOrdersId] = useState([]);

    useEffect(()=>{
       let orders =  localStorage.getItem("orders");
       orders = JSON.parse(orders)
       let o= orders.map((v)=>{ return v.id})
       setOrdersId(o);
       
    } , [])

    let handleOrders = ( id )=>{
        fetch("http://localhost:4001/items/"+id)
        .then(res=>res.json())
        .then((data)=>{
           let newOrders =  localStorage.getItem("orders");
           newOrders = JSON.parse(newOrders);
           newOrders.push(data);
           newOrders = JSON.stringify(newOrders);
           localStorage.setItem("orders" , newOrders)
        })
    }

    let handleCancelOrders = ( id )=>{
           let olderOrders =  localStorage.getItem("orders");
           olderOrders = JSON.parse(olderOrders);
           let start = olderOrders.findIndex( (v)=>{ return v.id == id} )
           olderOrders.splice( start , 1 );
           olderOrders = JSON.stringify(olderOrders);
           localStorage.setItem("orders" , olderOrders);

           window.location.reload();
    }

    return (
        <>
        <h1> { title } </h1>
        <div className="food-list">
            {
                items.map( (food)=>{ return(
                    <div className="food" key={food.id}>
                        <Link to={`/fooddetails${food.id}`}>
                            <img src={food.pic} alt="" />
                            <h2>{ food.foodName }</h2>
                            <h4>{ food.price }</h4>
                        </Link>
                       { !ordersId.includes(food.id) && <button onClick={()=>{handleOrders( food.id  )}}> add to order </button>}

                       { ordersId.includes(food.id) && <button onClick={()=>{handleCancelOrders( food.id  )}}> remove from orders </button>}

                    </div>
                )})
            }
        </div>
        </>
     );
}
export default Foodlist;