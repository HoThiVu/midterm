import React, { Component } from 'react';
import News from './News';
import axios from 'axios';
class Add extends Component {
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
  }
  rederDataTheGioi = (data, string, status)=>{    
    let main, arr=[];
    data.filter(item => item.new === string).map((filterData,i)=>{
      if (filterData.show == "main"){
        {console.log(555);}
        main = <>
        <img src={"./"+ filterData.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{filterData.name} </h5>
          <p className="card-text">{filterData.ngay}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
        </> 
      }
      else{
        arr[i] =         
        <div class="col-6">
        <img src={"./"+filterData.image} id = 'cardSmall'class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{filterData.name}</h5>
          <p class="card-text">{filterData.ngay}</p>
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
        new:" ",
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
  render() {
    return (
      <div>       
      
        <br></br>
        {/* có 3 props */}
        <News Thế giới
        title = "Tin Trong Nước" 
        main = {this.rederDataTheGioi(this.state.thegioi,"Trong nước",true)}
        arr = {this.rederDataTheGioi(this.state.thegioi,"Trong nước",false)}
        >  
        
        </News>
        <br></br>
        <News 
        title = "Tin Thế Giới"
           main = {this.rederDataTheGioi(this.state.thegioi,"Thế giới",true)}
           arr = {this.rederDataTheGioi(this.state.thegioi,"Thế giới",false)}
        ></News>
      </div>
    );
  }
}

export default Add;