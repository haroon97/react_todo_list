import React from 'react';

export default class Todo extends React.Component {
    render() {
      return (
        <div>
          {this.props.optionText}
          <button onClick={(e) => {
            this.props.deleteTodo(this.props.optionText)
          }}>Remove</button>
          <button onClick={(e) => {
            this.props.completedTasks(this.props.optionText)
          }}>Completed?</button>
        </div>
      );
    }
  }