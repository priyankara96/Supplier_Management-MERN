import React, { Component } from 'react';
import axios from 'axios';

// Shows details of all recipe...
 class Supplier_Details extends Component{
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
  axios.get("/SupplierRegistration").then(res =>{
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
  axios.delete(`/SupplierRegistration/delete/${id}`).then((res)=>{
    alert("Delete Successfully !");
    this.retrievePosts();
  })
}}



filterData(posts,searchKey){
  const result =posts.filter((post)=>
  post.SupplierName.includes(searchKey) || post.SupplierName.toLowerCase().includes(searchKey) ||
  post.NIC.includes(searchKey) || post.NIC.toLowerCase().includes(searchKey) ||
  post.MobileNumber.includes(searchKey) || post.MobileNumber.toLowerCase().includes(searchKey))
  this.setState({posts:result})
}

handleSearchArea =(e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("SupplierRegistration").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}
render(){
    return (
      
      <div className style={{ backgroundImage: 'url("https://wallpapercave.com/wp/QGj5HZS.jpg")', backgroundSize: 'cover'}}> <br/>
      <br/>
      <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Supplier Details</font> </h1> <br/>
      
      
      <div className = "row" style={{marginLeft:"50px", marginRight:"63px"}} >
        
            
      <div className = "col-lg-9 mt-2 mb-2" >
        &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-success" variant = "primary"> <a href="/Supplier_Registration" style={{textDecoration:'none',color:'white'}}>
          Create New Supplier </a></button>
        
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
            <th scope="col">Address</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Email</th>
            <th scope="col">Item</th>
            <th scope="col">Date</th>
            <th scope="col">Remark</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <div href={`/SupplierRegistration/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.SupplierName}
                  </div>
                  </td>
                  <td>{posts.NIC}</td>
                  <td>{posts.Address}</td>
                  <td>{posts.MobileNumber}</td>
                  <td>{posts.Email}</td>
                  <td>{posts.Item}</td>
                  <td>{posts.newDate}</td>
                  <td>{posts.Remark}</td>
                <td>
                  {/* Edit button */}
                  <a className="btn btn-info" href={`/Edit_Suppliers/${posts._id}`}>
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
export default Supplier_Details;
