import food from '../food.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {



    let [searchkey, setSearchkey] = useState("")

    return (
        <>
            <nav>
                <div className="logo">
                    <Link to="/home"><img className='navimg' src={food} /></Link>
                    <h1>BHOJANASHAAAALA</h1>
                </div>


                <div className="search">
                    <input type="search" value={searchkey} onChange={(e) => { setSearchkey(e.target.value) }} />   
                    <Link to={`/Search${searchkey}`} >  <button>Search</button>  </Link>                          
                </div>


                <div className="navlink">
                     <Link to="/addfood">Add Food</Link>                  
                    <Link to="/orders">Orders</Link>
                </div>
            </nav>

        </>

    );
}

export default Navbar;