import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state={
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id:2,
        title: 'Date night',
        completed: false,
      },
      {
        id:3,
        title: 'Meeting at office', 
        completed: true,
      }
    ]
  }
  markCompleted =(id)=>{
    this.setState({todos: this.state.todos.map(todo =>{
      if (todo.id===id){
        todo.completed =!todo.completed
      }
      return todo;
    })})
  }
  render(){
    // console.log(this.state.todos)
    return (
      <div className="App">
          <Todos  todos={this.state.todos}markCompleted={this.markcCompleted} />
      </div>
    );
  }
}

export default App;
