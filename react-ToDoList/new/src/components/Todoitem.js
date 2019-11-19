import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Todos from './Todos';

export class Todoitem extends Component {
    getStyle =()=>{
        // if( this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }else{
        //     return{
        //         textDecoration: 'none'
        //     }
        // }
        return {
            background: 'gray',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through': 'none'
        }

    }
    markCompleted (e) {
        console.log("hello")
    }
    render() {
        const {id, title}= this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p> 
                    <input type="checkbox"  onChange={(e)=> this.props.markCompleted(this.props.todo.id, e)}/> {' '}
                    {title} 
                </p>
            </div>
        )
    }
}
Todoitem.propTypes={
    todo: PropTypes.object.isRequired
}

export default Todoitem
