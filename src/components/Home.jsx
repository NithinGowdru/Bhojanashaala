
import useFetch from "../customHook/useFetch";
import FoodList from "./FoodList";




const Home = () => {

    
let {data:items, pending , error}=useFetch("http://localhost:4001/items")

    

    return (             
        <div className="home">
            {error && <h1  className="error" >{error}</h1>}
            {pending && <div className="loader"></div>}
            {items && <FoodList items={items} title="All Food" />}
            
                

        </div>
    );
}

export default Home;