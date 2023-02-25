
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";



const Fooddetails = () => {
    
    let {id}=useParams()
    let history=useHistory()
   let {data:item , pending , error}=useFetch("http://localhost:4001/items/"+id)

             let handleDeleteFood=()=>{
                fetch("http://localhost:4001/items/"+id ,{method:"DELETE"})
                .then(()=>{
                    alert("Food has been removed");
                    history.push("/")
                })
        }

    return ( 
        <div className="fooddetailsid">
        {error && <h1  className="error" >{error}</h1>}
        {pending && <div className="loader"></div>}
        {item && <div>
                    <img src={item.pic} alt="food"  />
                    <h1>{item.foodName}</h1>
                    <h3>{item.price}</h3>
                    <h3 className={item.type==="Veg" ? "veg" : "non-veg"}>Category - {item.type}</h3>
                   
                    <h3>{item.rating}</h3>
                    <div className="buttons">
                    

                    <Link to={`/updatefood${id}`}><button>Update Food</button></Link>

                    <button onClick={handleDeleteFood} >Remove Food</button>
                    </div>

                    

            </div>}
        
            

    </div>
     );
        
} 
 
export default Fooddetails;
