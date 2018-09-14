import React from 'react';
import Todo from './Todo.js';

export default class Todos extends React.Component {
    render() {
      return (
        <div>
        <button onClick={this.props.deleteAll}>Remove all</button>
        <button onClick={this.props.showModal}>Show completed tasks</button>
        {
          this.props.options.map((option) => {
            return <Todo key={option} optionText={option} deleteTodo={this.props.deleteTodo} completedTasks={this.props.completedTasks}/>
          })
        }
        </div>
      );
    }
  }