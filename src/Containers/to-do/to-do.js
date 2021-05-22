import React, { Component } from 'react';
import './todo.css'
import List from '../../Components/List/List';
class Todo extends Component{
    state={
        items:[],
        input:null
    }
    saveInput = (e) => {
        this.setState({ input: e.target.value });
      };
    itemAdded=(e)=>{
        e.preventDefault()
        let { items, input } = this.state;
        items.push(input);
        this.setState({items:items, input: ""})
    }
     delete=(id)=>{
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== id)
            };
        });
    }
    
    render(){
        return(
            <div className="main">
                <div className="todo">
                    <form onSubmit={this.itemAdded}>
                        <input type="text" placeholder="enter to-do" onChange={this.saveInput} value={this.state.input}/>
                        <button>Add</button>
                    </form>
                    <List className="list" listItems={this.state.items} _handleDelete={this.delete}/>
                </div>
            </div>
        )
    }
}
export default Todo;