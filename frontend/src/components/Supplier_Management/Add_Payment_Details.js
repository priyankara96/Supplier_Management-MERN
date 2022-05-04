import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// Creating a new recipe...

export default class Add_Payment_Details extends Component {

  constructor(props){
    super(props);
    this.state={
        SuppName:"",
        NICnum:"",
        MobileNum:"",
        Bank:"",
        PassBook:"",
        AccountNumber:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {SuppName,NICnum,MobileNum,Bank,PassBook,AccountNumber} = this.state;

    const data ={
        SuppName:SuppName,
        NICnum:NICnum,
        MobileNum:MobileNum,
        Bank:Bank,
        PassBook:PassBook,
        AccountNumber:AccountNumber
    }

    console.log(data)

    // Validation 

    if(SuppName.length === 0 || NICnum.length === 0 || MobileNum.length === 0 || Bank.length === 0 || PassBook.length === 0 || AccountNumber.length === 0  ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else if(SuppName.length < 4 ){
      swal("Invalid Supplier Name !", "Length shuld be greater than 4 !", "error");
    }else if(NICnum.length < 9 ){
      swal("Invalid NIC Number !", "Length shuld be greater than 9 !", "error");
    }else if(MobileNum.length < 4 ){
      swal("Invalid Mobile Number !", "Length shuld be greater than 4 !", "error");
    }else if(Bank.length < 2 ){
      swal("Invalid Bank Name !", "Length shuld be greater than 2 !", "error");
    }else if(PassBook.length < 4 ){
      swal("Invalid Supplier Name of Bank Pass Book !", "Length shuld be greater than 4 !", "error");
    }else if(AccountNumber.length < 4 ){
      swal("Invalid Account Number !", "Length shuld be greater than 4 !", "error");
    }
    else{

    axios.post("/PaymentDetails/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            SuppName:"",
            NICnum:"",
            MobileNum:"",
            Bank:"",
            PassBook:"",
            AccountNumber:""
          }
        )
      }
    });
    swal({ text: "Legal Case Type Successfully Added", icon: "success", button: "Okay!"})
  .then((value) => {
      window.location = '/Payment_Details'; // /ListSupplierRegistration
  });}
  }   

//demo button method
demo =() => { 

  //setState
  this.setState ({
    SuppName: "Pasindu Shavinda"
  })

  this.setState ({
    NICnum: "805284383V"
  })

  this.setState ({
    MobileNum: "0771231234"
  })

  this.setState ({
    Bank: "BOC"
  })

  this.setState ({
    PassBook: "3542674639065"
  })

  this.setState ({
    AccountNumber: "467554442021"
  })

}

  render() {
    return (
    <div>
      
      <div className style={{ backgroundImage: 'url("https://wallpapercave.com/wp/QGj5HZS.jpg")', backgroundSize: 'cover'}}> <br/>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > New Payment Details </font> </h1> 
          <br/>
          <form className="needs-validation" noValidate style={{backgroundColor: "#e0f6fc", 
          backgroundImage: 'url("https://media.istockphoto.com/photos/daisy-blossom-isolated-on-white-background-picture-id1324551908?k=20&m=1324551908&s=612x612&w=0&h=rc0rKyNPxX9GxqVbdr4323AX_jxDBWZ-AgEjiy3lNX4=")'}}>
          <br/><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Supplier Name :</strong></label>
              <input type="text"
              className="form-control"
              name="SuppName" 
              placeholder="Enter Supplier Name"
              value={this.state.SuppName}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>NIC :</strong></label>
              <input type="text"
              className="form-control"
              name="NICnum" 
              placeholder="Enter NIC Number"
              value={this.state.NICnum}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Mobile Number :</strong></label>
              <input type="text"
              className="form-control"
              name="MobileNum" 
              maxlength = "10"
              placeholder="Enter Mobile Number"
              value={this.state.MobileNum}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Bank Name :</strong></label>
              <input type="text"
              className="form-control"
              name="Bank" 
              placeholder="Enter Bank Name"
              value={this.state.Bank}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>PassBook :</strong></label>
              <input type="text"
              className="form-control"
              name="PassBook" 
              placeholder="Enter PassBook"
              value={this.state.PassBook}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Account Number :</strong></label>
              <input type="text"
              className="form-control"
              name="AccountNumber" 
              placeholder="Enter Account Number"
              value={this.state.AccountNumber}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          


          <div className="text-center" > 
          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>&nbsp;
          <a href="/Payment_Details"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
          <br/><br/>

          <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>
          </div>
          <br/>
          
          </form>
          <br/>
          </div>
        </div>
        </div>
    )
   }
}
