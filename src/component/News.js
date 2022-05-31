import React, { Component } from 'react';
class News extends Component {
    render() {
        return (
            <div class="card-deck container-lg">      
            <div class="col-6">
            <h2>
              {this.props.title}
            </h2>
              {this.props.main}
            </div>

            <div className='col-6'>
                {this.props.arr}
            </div>
          </div>
        );
    }
}

export default News;