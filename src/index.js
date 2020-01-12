import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './index.css';
import App from './App';
import PropertiesList from './components/User/propertiesList';
import PropertyDetails from './components/User/viewPropertyDetails';
import AddNewProperty from './components/Agent/addNewProperty';
import Login from './components/Agent/agentLogin';

import * as serviceWorker from './serviceWorker';

const Routing = (
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/propertiesList" component={PropertiesList} />
        <Route path="/propertyDetails/:propertyId" component={PropertyDetails} />
        <Route path="/addNewProperty" component={AddNewProperty} />
        <Route path="/login" component={Login} />
      </Router>
  );
  
  ReactDOM.render(Routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
