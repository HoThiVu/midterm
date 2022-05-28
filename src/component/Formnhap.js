import React, { Component } from 'react';

class Formnhap extends Component {
    render() {
        return (
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
        );
    }
}

export default Formnhap;