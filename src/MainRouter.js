import React from 'react'
import { Route , Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';
import Signup from './Singup';
import Login from './Login';
import Home from './Home';


const MainRouter = () => {
    return (
        <div>
            
             <Navbar />
            
            
             <Switch>
             <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
           
           
            
               
                </Switch>
                <Footer />
        </div>
    )
}

export default MainRouter;
