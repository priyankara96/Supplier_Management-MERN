import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class Edit_Suppliers extends Component{

// Make changes to the post
  constructor(props){
    super(props);
    this.state={
        SupplierName:"",
        NIC:"",
        Address:"",
        MobileNumber:"",
        Email:"",
        Item:"",
        newDate:"",
        Remark:""
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

    const {SupplierName,NIC,Address,MobileNumber,Email,Item,newDate,Remark} = this.state;

    const data ={
        SupplierName:SupplierName,
        NIC:NIC,
        Address:Address,
        MobileNumber:MobileNumber,
        Email:Email,
        Item:Item,
        newDate:newDate,
        Remark:Remark
    }
 
    console.log(data)
    /// Validation 

    const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(SupplierName.length === 0 || NIC.length === 0 || Address.length === 0 || MobileNumber.length === 0 || Email.length === 0 || Item.length === 0 || newDate.length === 0  ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else if(SupplierName.length < 4 ){
      swal("Invalid Supplier Name !", "Length shuld be greater than 4 !", "error");
    }else if(NIC.length < 9 ){
      swal("Invalid NIC Number !", "Length shuld be greater than 9 !", "error");
    }else if(Address.length < 4 ){
      swal("Invalid Address !", "Length shuld be greater than 4 !", "error");
    }else if ((!cuem.test(String(Email)))) {
      swal("Invalid email address !", "Please enter valid email address", "error");
    }else if(Item.length < 4 ){
      swal("Invalid Item !", "Length shuld be greater than 4 !", "error");
    }else if(Remark.length < 0 ){
      swal("Invalid Remark !", "", "error");
    }
    else{

      axios.put(`/SupplierRegistration/update/${id}`,data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            SupplierName:"",
            NIC:"",
            Address:"",
            MobileNumber:"",
            Email:"",
            Item:"",
            newDate:"",
            Remark:""
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
      window.location = '/'; // /ListSupplierRegistration
  });}
  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/SupplierRegistration/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
         
          SupplierName:res.data.post.SupplierName,
          NIC:res.data.post.NIC,
          Address:res.data.post.Address,
          MobileNumber:res.data.post.MobileNumber,
          Email:res.data.post.Email,
          Item:res.data.post.Item,
          newDate:res.data.post.newDate,
          Remark:res.data.post.Remark

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
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Edit Suppliers Details </font> </h1> 
          <br/>
          <form className="needs-validation" noValidate style={{backgroundColor: "#e0f6fc", 
          backgroundImage: 'url("https://media.istockphoto.com/photos/soap-bubbles-on-a-white-background-picture-id504046100?b=1&k=20&m=504046100&s=170667a&w=0&h=1w9CkR-f7dZHbZIJCsJZhSMtRZGMgSWYfsWkUBSOjJE=")'}}>
          <br/><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Supplier Name :</strong>*</label>
              <input type="text"
              className="form-control"
              name="SupplierName"
              placeholder="Enter Supplier Name"
              value={this.state.SupplierName}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>NIC :</strong>*</label>
              <input type="text"
              className="form-control"
              name="NIC"
              placeholder="Enter NIC"
              value={this.state.NIC}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Address :</strong>*</label>
              <input type="text"
              className="form-control"
              name="Address"
              placeholder="Enter Address"
              value={this.state.Address}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Mobile Number</strong>*</label>
              <input type="text"
              className="form-control"
              name="MobileNumber"
              placeholder="Enter Mobile Number"
              value={this.state.MobileNumber}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Email :</strong>*</label>
              <input type="text"
              className="form-control"
              name="Email"
              placeholder="Enter Email"
              value={this.state.Email}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Item :</strong>*</label>
              <input type="text"
              className="form-control"
              name="Item"
              placeholder="Item"
              value={this.state.Item}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Date :</strong>*</label>
              <input type="text"
              className="form-control"
              name="newDate"
              placeholder="Date"
              value={this.state.newDate}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Remark :</strong>*</label>
              <input type="text"
              className="form-control"
              name="Remark"
              placeholder="Remark"
              value={this.state.Remark}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            


            <div className="text-center" > 
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update      
              </button>&nbsp;
            <a href="/"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
            {/* ListSupplierRegistration */}
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
