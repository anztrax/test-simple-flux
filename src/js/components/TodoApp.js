/** @jsx React.DOM */
var React = require("react");
var TodoAppActions = require("../actions/TodoActions");
var TodoStore = require("../stores/TodoStore");

var TodoApp = React.createClass({
  getInitialState : function(){
    return {
      totalCount : TodoStore.getTotalCount()
    }
  },
  render : function(){
    return (
      <div className="todoAppCon">
        <h1>Todo App Con {this.state.totalCount}</h1>
        <button onClick={this.handleClick}>clicked</button>
      </div>
    );
  },

  handleClick : function(){
    TodoAppActions.incrementTotal();
    this.setState({totalCount : TodoStore.getTotalCount()});
  }
});

module.exports = TodoApp;
