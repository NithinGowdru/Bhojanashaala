import React from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AddFood from './components/Addfood';
import Fooddetails from './components/Fooddetails';
import Orders from './components/Orders';
import Searchfood from './components/Searchfood';
import Updatefood from './components/Updatefood';
import Signup from './components/Signup';




function App() {
    return (
        <Router >

              
                  <div className="App">
                      <Navbar/>

                      <Switch>
                                <Route exact path="/">
                                        <Signup/>
                                </Route>
                                <Route  path="/home">
                                        <Home/>
                                </Route>

                                <Route path="/addfood">
                                        <AddFood/>
                                </Route>

                                <Route path="/orders">
                                        <Orders/>
                                </Route>

                                <Route path="/Search:searchkey"> 
                                        <Searchfood/>
                                </Route>

                                <Route path="/fooddetails:id">
                                        <Fooddetails/>
                                </Route>

                                <Route path="/updatefood:id">
                                        <Updatefood/>
                                </Route>

                      </Switch>
                      
                  </div>
              

        </Router>

    )
    
    
}

export default App



