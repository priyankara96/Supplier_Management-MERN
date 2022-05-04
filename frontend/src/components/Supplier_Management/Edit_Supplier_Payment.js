import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class Edit_Payment_Details extends Component{

// Make changes to the post
  constructor(props){
    super(props);
    this.state={
        SuppID:"",
        InvoiceNo:"",
        SupplierNa:"",
        PaymentDate:"",
        Amount:""
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
    const id = this.props.match.params.id;

    const {SuppID,InvoiceNo,SupplierNa,PaymentDate,Amount} = this.state;

    const data ={
        SuppID:SuppID,
        InvoiceNo:InvoiceNo,
        SupplierNa:SupplierNa,
        PaymentDate:PaymentDate,
        Amount:Amount
    }
 
    console.log(data)

    // Validation 

    if(SuppID.length === 0 || InvoiceNo.length === 0|| SupplierNa.length === 0 || PaymentDate.length === 0 || Amount.length === 0  ){
        swal(" Fields Cannot empty !","Please enter all data !", "error");
      }else if(SuppID.length < 2 ){
        swal("Invalid Supplier ID !", "Length shuld be greater than 2 !", "error");
      }else if(InvoiceNo.length < 2 ){
        swal("Invalid Invoice Number !", "Length shuld be greater than 2 !", "error");
      }else if(SupplierNa.length < 4 ){
        swal("Invalid Supplier Name !", "Length shuld be greater than 4 !", "error");
      }else if(PaymentDate.length < 4 ){
        swal("Invalid Payment Date !", "", "error");
      }else if(Amount.length < 1 ){
        swal("Invalid Amount !", "", "error");
      }
      else{

      axios.put(`/SupplierPayment/update/${id}`,data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            SuppID:"",
            InvoiceNo:"",
            SupplierNa:"",
            PaymentDate:"",
            Amount:""
          }
        )
      }
    });
    swal({
      title: "Done!",
      text: "Update Successful",
      icon: "success",
      button: "Okay!"
  })
  .then((value) => {
      window.location = '/Supplier_Payment_Details'; 
  });}
  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/SupplierPayment/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
         
            SuppID:res.data.post.SuppID,
            InvoiceNo:res.data.post.InvoiceNo,
            SupplierNa:res.data.post.SupplierNa,
            PaymentDate:res.data.post.PaymentDate,
            Amount:res.data.post.Amount

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (
    <div>
      <div className style={{ backgroundImage: 'url("https://wallpapercave.com/wp/QGj5HZS.jpg")', backgroundSize: 'cover'}}> <br/>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Edit Payment Details </font> </h1> 
          <br/>
          <form className="needs-validation" noValidate style={{backgroundColor: "#e0f6fc", 
          backgroundImage: 'url("https://media.istockphoto.com/photos/abstract-beautiful-blue-flower-on-white-background-picture-id869988322?k=20&m=869988322&s=170667a&w=0&h=1oji0W3dTC9bZTgbR9xvUbT_BEShfd6guX8wKR1efpg=")'}}>
          <br/><br/>
          
            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Supplier ID :</strong>*</label>
              <input type="text"
              className="form-control"
              name="SuppID" 
              placeholder="Enter Supplier ID"
              value={this.state.SuppID}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Invoice Number :</strong>*</label>
              <input type="text"
              className="form-control"
              name="InvoiceNo" 
              placeholder="Enter Invoice Number"
              value={this.state.InvoiceNo}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Supplier Name</strong>*</label>
              <input type="text"
              className="form-control"
              name="SupplierNa" 
              placeholder="Enter Supplier Name"
              value={this.state.SupplierNa}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Payment Date :</strong>*</label>
              <input type="text"
              className="form-control"
              name="PaymentDate" 
              placeholder="Enter Payment Date"
              value={this.state.PaymentDate}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Amount :</strong>*</label>
              <input type="text"
              className="form-control"
              name="Amount" 
              placeholder="Enter Amount"
              value={this.state.Amount}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
            </div><br/>
            


            <div className="text-center" > 
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update      
              </button>&nbsp;
            <a href="/Supplier_Payment_Details"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
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
