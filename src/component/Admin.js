import PagesKiemtraAdmin from "./../aset/PagesKiemtraAdmin.css"
import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import { Redirect } from "react-router/cjs/react-router.min";

class Admin extends Component {
   constructor(props) {
      super(props);
      this.state={
        thegioi: [],
        id: '',
        name : '',
        ngay : '',
        image : '',
        new: "",
      
      }
      this.onDelete = this.onDelete.bind(this);
      this.onChange = this.onChange.bind(this);
      this.showEditthegioi1 = this.showEditthegioi1.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
      var {match} = this.props;
      if (match) {
        var id = match.params.id;
        axios({
        method: 'GET',
        url :`https://6290491127f4ba1c65b694af.mockapi.io/midTerm/${id}`,
        data : null
       }).then(res =>{
        var data = res.data;
          this.setState({
        new: "",

            id: data.id,
            name : data.name,
            ngay : data.ngay,
            image : data.image
          });
        }).catch( err =>{
      });
     }
      axios.get('https://6290491127f4ba1c65b694af.mockapi.io/midTerm').then(res => {
        this.setState({ thegioi:  res.data});
      })
      if(this.state.id == ''){
        document.getElementById('image-edit').style.display = 'none';
      }else{
        document.getElementById('image-edit').style.display = 'block';
      }
    }
    getthegioi1 = (id) => {
      for(var i=0; i<this.state.thegioi.length; i++) {
        if (this.state.thegioi[i].id === id) {
          return this.state.thegioi[i];
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
    showEditthegioi1 = (id) => {
      var thegioi1 = this.getthegioi1(id);
      this.setState({
        new: thegioi1.new,
   
        id: thegioi1.id,
        name: thegioi1.name,
        ngay: thegioi1.ngay,     
        image : thegioi1.image,
       
      });
      document.getElementById('image-edit').style.display = 'block';
      alert(id);
    }
    getIndexthegioi = (id) => {
      for(var i=0; i<this.state.thegioi.length; i++) {
        if (this.state.thegioi[i].id === id) {
          return i;
        }
      }
      return -1;
    }
    onSave = (event) => {
      event.preventDefault();
      if (this.state.id ==''){
        if(this.state.name !== '' && this.state.ngay!=='' && this.state.quantity !== '' && this.state.image!==''){
          axios({
            method:'POST',
            url :`https://6290491127f4ba1c65b694af.mockapi.io/midTerm`,
            data: {
              name: this.state.name,
              ngay: this.state.ngay,           
              image : this.state.image,
              new:this.state.new
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
          url :`https://6290491127f4ba1c65b694af.mockapi.io/midTerm/${this.state.id}`,
          data: {
            name: this.state.name,
            ngay: this.state.ngay,           
            image : this.state.image,   
            new: this.state.new        
          }
  
        }).then(res => {
          this.componentDidMount();
          alert("Successfully");
        })
      }
      this.setState({
        id:'',
        name:'',   
        ngay : '',
        image : '',
        new:''
      });
    }
   onDelete = (id) =>{
          console.log(id);
           axios({
            method: 'DELETE',
            url :`https://6290491127f4ba1c65b694af.mockapi.io/midTerm/${id}`,
            data : null
          }).then(res =>{
              if (res.status ===  200) {
                var index = this.getIndexthegioi(id);
                if (index !== -1){
                  var thegioi = this.state.thegioi;
                  thegioi.splice(index,1);
                }
                  this.setState({
                    thegioi :thegioi
                  });
                  alert(id);
                  toast.success("Xóa sản phẩm thành công", {
                  })
                
              }
          });
    }
  render() {
    return (
  
<div className='container'>
<div className="row">
            <form onSubmit={this.onSave}>
            <div  id="category-id">
                     <select
                    type="option"
                    name="new"
                    value={this.state.new}
                    onChange = {this.onChange}
                    className="form-control"
                    // id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    >
                      {/* <option 
                         value="Thế giới" 
                      className="form-control" 
                      type="option">
                      Chọn thể loại
                      </option> */}
                      <option 
                       value="Thế giới"
                      className="form-control" 
                      type="option">
                       Thế giới
                      </option>
                      <option 
                      value="Trong nước">
                      Trong nước
                      </option>
                    </select>
                  </div>
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
                 
                  <div id="nname"> <span  htmlFor="hk2"> Ngay</span>
                     <input  
                     type="date"
                     name="ngay"
                     onChange = {this.onChange}
                     value={this.state.ngay}
                     className="form-control"
                     id="exampleInputEmail2"
                     aria-describedby="emailHelp"
                     placeholder="Enter date"/> 
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
    <h1>TRONG NUOC</h1>
   <div className="row">
   {renderInside(this.state.thegioi,'Trong nước')}
   </div>
    <h1>NGOAI NUOC</h1>
    <div className="row">
    {renderInside(this.state.thegioi,"Thế giới")}
   </div>
  </div>
)}
};

const renderInside = (neww,string)=>{
    let  tintuc = neww.filter(item => item.new === string).map(filterNew=>(
        <div className="card col-4" style={{ width: "18rem" }}>
        <img className="card-img-top" src={"./"+ filterNew.image} alt="Card image cap" />
        <div className="card-body">
           <h5 className="card-title">{filterNew.name}</h5>
           <div className="row">
              <div className="">
                 <strong>
                 {
                 filterNew.ngay
                 }
                   </strong>
              </div>
              {/* <div className="col-6">
                <del>
                {
                 thegioi1.oldngay
                 }
                </del>
                
              </div> */}
           </div>
           <button className="btn btn-primary" onClick={() =>this.showEditthegioi1(filterNew.id)}>
           Edit
           </button>
           <button className="btn btn-danger" onClick={() =>this.onDelete(filterNew.id)}>
           delete
           </button>
        </div>
     </div>
      ))
      return tintuc
}


export default Admin;