import React, { Component } from 'react';

class ToDo extends Component {
  render() {
     return (
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         <button type="button" class="the-button" onClick={ this.props.deleteTodo }>X</button>
       </li>
     );
   }
}

export default ToDo;
