import React, { Component } from 'react';
import axios from 'axios';

// Shows details of all recipe...
 class Payment_Details extends Component{
  constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}
componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/PaymentDetails").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}

onDelete=(id)=>{
  if (window.confirm('Are you sure?')) {
  axios.delete(`/PaymentDetails/delete/${id}`).then((res)=>{
    alert("Delete Successfully !");
    this.retrievePosts();
  })
}}


filterData(posts,searchKey){
  const result =posts.filter((post)=>
  post.SuppName.includes(searchKey) || post.SuppName.toLowerCase().includes(searchKey) ||
  post.NICnum.includes(searchKey) || post.NICnum.toLowerCase().includes(searchKey) ||
  post.MobileNum.includes(searchKey) || post.MobileNum.toLowerCase().includes(searchKey))
  this.setState({posts:result})
}

handleSearchArea =(e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("PaymentDetails").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}
render(){
    return (
      
      <div className style={{ backgroundImage: 'url("https://wallpapercave.com/wp/QGj5HZS.jpg")', backgroundSize: 'cover'}}> <br/>
      <br/>
      <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Payment Details</font> </h1> <br/>
      
      
      <div className = "row" style={{marginLeft:"50px", marginRight:"63px"}} >
        
            
      <div className = "col-lg-9 mt-2 mb-2" >
        &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-success" variant = "primary"> <a href="/Add_Payment_Details" style={{textDecoration:'none',color:'white'}}>
          Create New Payment Details </a></button>
        
        </div > 
            
          <div className = "col-lg-3 mt-2 mb-2">
          <input className="form-control"
          type="search"
          placeholder="Search Name/NIC/Mobile No."
          namr="searchQuery"
          onChange={this.handleSearchArea}>
          </input> &nbsp;&nbsp;&nbsp;</div > </div>


      <div className="container">
      <div style = {{backgroundColor:'#FFFF',  margin:"0"}}>
      <table class="table table-bordered table-white" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Supplier Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Bank Name</th>
            <th scope="col">PassBook</th>
            <th scope="col">Account Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <div href={`/PaymentDetails/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.SuppName}
                  </div>
                  </td>
                  <td>{posts.NICnum}</td>
                  <td>{posts.MobileNum}</td>
                  <td>{posts.Bank}</td>
                  <td>{posts.PassBook}</td>
                  <td>{posts.AccountNumber}</td>
                <td>
                  {/* Edit button */}
                  <a className="btn btn-info" href={`/Edit_Payment_Details/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit&nbsp;&nbsp;&nbsp;
                  </a>
                  &nbsp;
                  {/* Delet button */}
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                    <i className="fa fa-trash"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            )) }
        </tbody>
      </table>
      
      </div>
      <br/>
      
      </div><br/><br/></div>
    )
  }
}
export default Payment_Details;
