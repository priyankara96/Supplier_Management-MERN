import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class Edit_Payment_Details extends Component{

// Make changes to the post
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
    const id = this.props.match.params.id;

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

      axios.put(`/PaymentDetails/update/${id}`,data).then((res) =>{
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
    swal({
      title: "Done!",
      text: "Update Successful",
      icon: "success",
      button: "Okay!"
  })
  .then((value) => {
      window.location = '/Payment_Details'; 
  });}
  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/PaymentDetails/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
         
            SuppName:res.data.post.SuppName,
            NICnum:res.data.post.NICnum,
            MobileNum:res.data.post.MobileNum,
            Bank:res.data.post.Bank,
            PassBook:res.data.post.PassBook,
            AccountNumber:res.data.post.AccountNumber

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
          backgroundImage: 'url("https://media.istockphoto.com/photos/daisy-blossom-isolated-on-white-background-picture-id1324551908?k=20&m=1324551908&s=612x612&w=0&h=rc0rKyNPxX9GxqVbdr4323AX_jxDBWZ-AgEjiy3lNX4=")'}}>
          <br/><br/>
          
            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Supplier Name :</strong>*</label>
              <input type="text"
              className="form-control"
              name="SuppName"
              placeholder="Enter Supplier Name"
              value={this.state.SuppName}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>NIC :</strong>*</label>
              <input type="text"
              className="form-control"
              name="NICnum"
              placeholder="Enter NIC"
              value={this.state.NICnum}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Mobile Number</strong>*</label>
              <input type="text"
              className="form-control"
              name="MobileNum"
              placeholder="Enter Mobile Number"
              value={this.state.MobileNum}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Bank Name :</strong>*</label>
              <input type="text"
              className="form-control"
              name="Bank"
              placeholder="Enter Bank Name"
              value={this.state.Bank}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>PassBook :</strong>*</label>
              <input type="text"
              className="form-control"
              name="PassBook"
              placeholder="Enter PassBook"
              value={this.state.PassBook}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Account Number :</strong>*</label>
              <input type="text"
              className="form-control"
              name="AccountNumber"
              placeholder="Enter Account Number"
              value={this.state.AccountNumber}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            


            <div className="text-center" > 
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update      
              </button>&nbsp;
            <a href="/Payment_Details"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
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
