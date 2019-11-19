import React, {Component} from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
 
    render(){
        return this.props.todos.map((todo)=> (
            <TodoItem key={todo.id} todo={todo} 
            markCompleted= {this.props.markCompleted}
            />
        ))
        // console.log(this.props.todos)
        // return this.props.todos.map((todo) =>(
        //     <h3> { todo.title}</h3>
        // ));
    }
}
Todos.propTypes={
    todos: PropTypes.array.isRequired
}

export default Todos;
