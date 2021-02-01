import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

  } from "react-router-dom";
import { NavBar } from '../09-useContext/NavBar'
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router >
            
            <div className="container mt-3">

            <NavBar />
                <Switch>
                
                    <Route exact path="/" className="nav-link active" component={ HomeScreen } />  
                    <Route exact path="/about" className="nav-link active" component={ AboutScreen } /> 
                    <Route exact path="/login" className="nav-link active" component={ LoginScreen } /> 
                    <Redirect to="/" />
                
        
            
                </Switch>

            </div>

        </Router>
    )
}
