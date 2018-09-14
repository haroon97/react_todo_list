import React from 'react';

export default class Completed extends React.Component {
    render() {
      return (
        <div>
          {this.props.completed.length > 0 && <p>Your Completed Tasks for today are</p>}
          {this.props.completed.map((complete) => {
            return <li>{complete}</li>
          })}
        </div>
      );
    }
  }