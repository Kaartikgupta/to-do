import React, { Component } from 'react';
import './list.css'
class List extends Component{
     _handleDelete(index){
        this.props._handleDelete(index);
    }
    render(){
    return(
        <div>
           <ul>
               {this.props.listItems.map((item,index)=>{
                    return <li className="anima" key={index} onClick={this._handleDelete.bind(this, index)}>{item}</li>
                })}
           </ul>
        </div>
        
            
    )
    }
}
export default List;