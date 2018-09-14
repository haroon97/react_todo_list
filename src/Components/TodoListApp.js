import React from 'react';
import Header from './Header.js';
import Todos from './Todos.js';
import AddTodo from './AddTodo.js';
import Completed from './Completed.js';
import CompletedModal from './Modal.js';

export default class TodoListApp extends React.Component {
    constructor(props) {
      super(props);
      this.deleteAll = this.deleteAll.bind(this);
      this.handleAddTodo = this.handleAddTodo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      this.completedTasks = this.completedTasks.bind(this);
      this.showModal = this.showModal.bind(this);
      this.state = {
        options: [],
        completed: [],
        modalOpen: false
      }
      
    }
    deleteAll() {
      this.setState(() => {
        return {
          options: []
        }
      })
    }
  
    handleAddTodo(todo) {
      if (todo === '') {
        return 'Please enter a valid value';
      }
      else if (this.state.options.indexOf(todo) > -1) {
        return 'The value already exists';
      }
      else {
        this.setState((prevState) => {
          return {
            options: prevState.options.concat(todo)
          }
        })
      }
    }

    showModal() {
      this.setState(() => {
        return {
          modalOpen: true
        }
      })
      console.log('working');
    }
  
    deleteTodo(itemToRemove) {
      this.setState((prevState) => {
        return {
          options: prevState.options.filter((option) => {
            return option !== itemToRemove
          })
        }
      })
    }
  
    completedTasks(completedTask) {
      this.setState((prevState) => {
        return {
          options: prevState.options.filter((option) => {
            return option !== completedTask
          })
        }
      })

      this.setState((prevState) => {
        return {
          completed: prevState.completed.concat(completedTask)
        }
      })
      console.log(this.state.completed);
      console.log(completedTask);
    }
  
    render() {
      const title = 'Todo List App';
      const subTitle = 'Keep track of your daily tasks';
      return (
        <div>
          <Header title={title} subTitle={subTitle}/>
          <Todos options={this.state.options} deleteAll={this.deleteAll} deleteTodo={this.deleteTodo} completedTasks={this.completedTasks} showModal={this.showModal}/>
          <AddTodo handleAddTodo={this.handleAddTodo} todo={this.state.options}/>
          <Completed completed={this.state.completed} />
          <CompletedModal showModal={this.showModal}/>
        </div>
      );
    }
  }
  
