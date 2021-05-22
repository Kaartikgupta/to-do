import React, { Component } from 'react';
import './list.css'
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
class List extends Component{
     _handleDelete(index){
        this.props._handleDelete(index);
    }
    render(){
    return(
        <div>
           <TransitionGroup component="ul">
               {this.props.listItems.map((item,index)=>{
                    return( <CSSTransition key={index} classNames="fade" timeout={300}>
                                <li onClick={this._handleDelete.bind(this, index)}>{item}</li>    
                            </CSSTransition>
                            ) 
                })}
          </TransitionGroup>
        </div>
        
            
    )
    }
}
export default List;