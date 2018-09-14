import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddTodo = this.handleAddTodo.bind(this);
      this.state = {
        error: undefined
      }
    }
    handleAddTodo(e) {
      e.preventDefault();
      const todo = e.target.elements.todo.value;
      e.target.elements.todo.value = '';
      const error = this.props.handleAddTodo(todo);
      this.setState(() => {
        return {
          error: error
        }
      })
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          {this.props.todo.length === 0 && <p>Please enter your tasks for today</p>}
          <form onSubmit={this.handleAddTodo}>
            <input type='text' name='todo'></input>
            <button>Submit</button>
          </form>
        </div>
      );
    }
  }