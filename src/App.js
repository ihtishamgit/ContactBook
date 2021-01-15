import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/Contacts/Contact';
import  AddContact  from "./components/Contacts/AddContact";
import {provider, Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './Store'

function App() {
  return (
    <>
    <Provider store={store}> 
    <Router> 
    <Navbar/>
      <Switch> 
       <Route exact path='/' component={Contact}/>
       <Route exact path='/add' component={AddContact}/>
       <Contact/>
       </Switch>
       </Router>
       </Provider>
      {/* <h1>Redux project!</h1> */}
    </>
  );
}

export default App;
