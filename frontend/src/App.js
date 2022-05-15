import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Supplier_Registration from './components/Supplier_Management/Supplier_Registration';
import Supplier_Details from './components/Supplier_Management/Supplier_Details';
import Edit_Suppliers from './components/Supplier_Management/Edit_Suppliers';
import Add_Payment_Details from './components/Supplier_Management/Add_Payment_Details';
import Payment_Details from './components/Supplier_Management/Payment_Details';
import Edit_Payment_Details from './components/Supplier_Management/Edit_Payment_Details';
import Add_Supplier_Payment from './components/Supplier_Management/Add_Supplier_Payment';
import Supplier_Payment_Details from './components/Supplier_Management/Supplier_Payment_Details';
import Edit_Supplier_Payment from './components/Supplier_Management/Edit_Supplier_Payment';

import Footer from './components/Footer';
import NavBar from './components/NavBar';


class App extends Component{
  render(){
    return(
      <Router>
        <NavBar/> {/* Create navbar */}
        <div style = {{backgroundColor:'#e0f6fc',  margin:"0"}}>
        
          
          <Route path="/Supplier_Registration" exact component={Supplier_Registration}></Route>
          <Route path="/" exact component={Supplier_Details}></Route>
          <Route path="/Edit_Suppliers/:id" exact component={Edit_Suppliers}></Route>
          <Route path="/Add_Payment_Details" exact component={Add_Payment_Details}></Route>
          <Route path="/Payment_Details" exact component={Payment_Details}></Route>
          <Route path="/Edit_Payment_Details/:id" exact component={Edit_Payment_Details}></Route>
          <Route path="/Add_Supplier_Payment" exact component={Add_Supplier_Payment}></Route>
          <Route path="/Supplier_Payment_Details" exact component={Supplier_Payment_Details}></Route>
          <Route path="/Edit_Supplier_Payment/:id" exact component={Edit_Supplier_Payment}></Route>

          <div style={{paddingTop:'0px',width:'100%'}}>
          {/* Create footer */}
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
