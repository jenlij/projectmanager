import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
 
  render() {
    let todoItem;
    if(this.props.todos){
      todoItem = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.title} todo={todo} /> 
        );
      });
    }
    return (
      <div className="Todos">
        <h3>To Do List</h3>
        {todoItem}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: React.PropTypes.array
}

export default Todos;
