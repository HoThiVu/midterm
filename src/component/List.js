import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

class List extends Component {
  constructor(props) {
    super(props);
    this.state={
      products: [],
      id: '',
      name : '',
      price : '',
      image : '',
      quantity: '',
      oldPrice : '',
    }
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showEditProduct = this.showEditProduct.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    var {match} = this.props;
    if (match) {
      var id = match.params.id;
      axios({
      method: 'GET',
      url :`https://61bc10c2d8542f001782453f.mockapi.io/Midtermtest/${id}`,
      data : null
     }).then(res =>{
      var data = res.data;
        this.setState({
          id: data.id,
          name : data.name,
          price : data.price,
          image : data.image,
          quantity: data.quantity,
          oldPrice : data.oldPrice,
        });
      }).catch( err =>{
    });
   }
    axios.get('https://61bc10c2d8542f001782453f.mockapi.io/Midtermtest').then(res => {
      this.setState({ products:  res.data});
    })
    if(this.state.id == ''){
      document.getElementById('image-edit').style.display = 'none';
    }else{
      document.getElementById('image-edit').style.display = 'block';
    }
  }
  getProduct = (id) => {
    for(var i=0; i<this.state.products.length; i++) {
      if (this.state.products[i].id === id) {
        return this.state.products[i];
      }
    }
    return null;
  }
  onChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onChangeImage = (event) =>{
    this.setState({
      [event.target.name]: "images/"+event.target.files[0].name,
    });
    console.log(event.target.files[0].name);
  }
  showEditProduct = (id) => {
    var product = this.getProduct(id);
    this.setState({
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice : product.oldPrice,
      image : product.image,
      quantity : product.quantity,
    });
    document.getElementById('image-edit').style.display = 'block';
    alert(id);
  }
  getIndexProducts = (id) => {
    for(var i=0; i<this.state.products.length; i++) {
      if (this.state.products[i].id === id) {
        return i;
      }
    }
    return -1;
  }
  onSave = (event) => {
    event.preventDefault();
    if (this.state.id ==''){
      if(this.state.name !== '' && this.state.price!=='' && this.state.quantity !== '' && this.state.image!==''){
        axios({
          method:'POST',
          url :`https://61bc10c2d8542f001782453f.mockapi.io/Midtermtest`,
          data: {
            name: this.state.name,
            price: this.state.price,
            oldPrice : this.state.oldPrice,
            image : this.state.image,
            quantity : this.state.quantity,
          }
  
        }).then(res => {
          this.componentDidMount();
          alert("Successfully");
        })
      }else{
        alert("Empty something");
      }
    }else{
      axios({
        method:'PUT',
        url :`https://61bc10c2d8542f001782453f.mockapi.io/Midtermtest/${this.state.id}`,
        data: {
          name: this.state.name,
          price: this.state.price,
          oldPrice : this.state.oldPrice,
          image : this.state.image,
          quantity : this.state.quantity,
        }

      }).then(res => {
        this.componentDidMount();
        alert("Successfully");
      })
    }
    this.setState({
      id:'',
      name:'',
      quantity:'',
      price : '',
      oldPrice : '',
      image : '',
    });
  }
 onDelete = (id) =>{
        console.log(id);
         axios({
          method: 'DELETE',
          url :`https://61bc10c2d8542f001782453f.mockapi.io/Midtermtest/${id}`,
          data : null
        }).then(res =>{
            if (res.status ===  200) {
              var index = this.getIndexProducts(id);
              if (index !== -1){
                var products = this.state.products;
                products.splice(index,1);
              }
                this.setState({
                  products :products
                });
                alert(id);
                toast.success("Xóa sản phẩm thành công", {
                })
              
            }
        });
  }
  render() {
    return (
     
      <div className="container">
      <div className="row">
         <form onSubmit={this.onSave}>
               <div id="fname"> <span>Name</span>
                  <input 
                 type="text"
                 name="name"
                 value={this.state.name}
                 onChange = {this.onChange}
                 className="form-control"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
                 placeholder="Enter name"
                 /> 
               </div>
               <div id="lname" htmlFor="hk2"> <span>Quantity</span>
                  <input 
                     type="text"
                     name="quantity"
                     onChange = {this.onChange}
                     value={this.state.quantity}
                     className="form-control"
                     id="exampleInputPassword1"
                     placeholder="Quantity"/> 
                  
               </div>
               <div id="nname"> <span  htmlFor="hk2">Price</span>
                  <input  
                  type="text"
                  name="price"
                  onChange = {this.onChange}
                  value={this.state.price}
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter price"/> 
               </div>
               <div id="nname"> <span  htmlFor="hk2">OldPrice</span>
                  <input  
                  type="text"
                  name="oldPrice"
                  onChange = {this.onChange}
                  value={this.state.oldPrice}
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter oldPrice"/> 
               </div>
               <div id="nname"> <span  htmlFor="hk2">Image</span>
                  <input   
                      type="file"
                      name="image"
                      onChange = {this.onChangeImage}
                      className="form-control"
                      placeholder="image"/> 
               </div> 
               <div  id = "image-edit" style={{ display: "none" }}>
               <label>Image</label>
               <img src={"./"+this.state.image} style={{ width: "100px" }}/>
         </div>
         <button type="submit" className="btn btn-primary">
           Save
         </button>         
            </form>
      </div>
      <div className="row">
            {
            this.state.products.map((product) =>(
            <div className="card col-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={"./"+ product.image} alt="Card image cap" />
            <div className="card-body">
               <h5 className="card-title">{product.name}</h5>
               <div className="row">
                  <div className="col-6">
                     <strong>
                     {
                     product.price
                     }
                       </strong>
                  </div>
                  <div className="col-6">
                    <del>
                    {
                     product.oldPrice
                     }
                    </del>
                    
                  </div>
               </div>
               <button className="btn btn-primary" onClick={() =>this.showEditProduct(product.id)}>
               Edit
               </button>
               <button className="btn btn-danger" onClick={() =>this.onDelete(product.id)}>
               delete
               </button>
            </div>
         </div>
         ))
         } 
      </div>
      </div>
      )}}

export default List;

