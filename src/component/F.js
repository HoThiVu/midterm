import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
class F extends Component {
   constructor(props) {
      super(props);
      this.state={
        thegioi: [],
        id:'',
        name : '',
        ngay : '',
        image : '',
        new: "",     
      }
      // this.onDelete = this.onDelete.bind(this);
      // this.onChange = this.onChange.bind(this);
      this.showEditProduct = this.showEditProduct.bind(this);
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
     
    }
    getProduct = (id) => {
      for(var i=0; i<this.state.thegioi.length; i++) {
        if (this.state.thegioi[i].id === id) {
          return this.state.thegioi[i];
        }
      }
      return null;
    }
   
    showEditProduct = (id) => {
      var thegioi1 = this.getProduct(id);
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
    RenderTrangchu = (home,string,status)=>{
      let main, arr=[];
       home.filter(item => item.new === string).map((filterHome,i)=>{

        if (filterHome.show == "main"){
          {console.log(555);}
          main = <div className='f-grid-col'  >
          <img className='Image' src={"./"+ filterHome.image}></img>
          <h4>{filterHome.name}</h4>
          <p>{filterHome.ngay}</p>
       </div>
        }    
        else{
          arr[i] =  
          <div className='content'>
             <div>
                <img className='Image-img' src={"./"+filterHome.image}></img>
             </div>
             <div id='Title'>
                <h4>{filterHome.name}</h4>
                <p>{filterHome.ngay}</p>
             </div>
             
          </div>
         
        }      
      })
      if (status ){
        return main
      }     
      else{
        return arr
      }
     
    } 
  render() {
    return (
      <>
       <h1>Tin Tức Trong Nước</h1>
  
   <div className='f-grid'>
      {this.RenderTrangchu(this.state.thegioi,"Trong nước",true)}
      {/* <h1>gggg </h1> */}
      <div className='f-grid-col'>
      {this.RenderTrangchu(this.state.thegioi,"Trong nước",false)}
      </div>
  
   {/* {RenderTrangchutrongnnuoc(this.state.thegioi,'Trong nước')} */}

   </div>
    <h1>Tin Tức Ngoài Nước</h1>
  
      <div className='f-grid'>
      {this.RenderTrangchu(this.state.thegioi,"Thế giới",true)}
      <div className='f-grid-col'>
      {this.RenderTrangchu(this.state.thegioi,"Thế giới",false)}
      </div>
     
      </div>
   
 
      </>
    
)}
}


// const RenderTrangchutrongnnuoc = (home,string)=>{
//   let Tinnhotrongnuoc =home.filter(item => item.new ===string).map(filtertinnhotrongnuoc =>(
//     <div className='content'>
//                 <div>
//                    <img className='Image-img' src={"./"+filtertinnhotrongnuoc.image} alt=" #"></img>
//                 </div>
//                 <div id='Title'>
//                    <h2>{filtertinnhotrongnuoc.name}</h2>
//                    <p>{filtertinnhotrongnuoc.ngay}</p>
//                 </div>
//              </div>
//   ))
//   return Tinnhotrongnuoc;
// }


export default F;