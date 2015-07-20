var AppDispatcher = require("../dispatcher/AppDispatcher");
var TodoConstants = require("../constants/TodoConstants");

var TodoActions = {
  incrementTotal :function(){
    AppDispatcher.dispatch({
      actionType : TodoConstants.TODO_INCREMENT_TOTAL
    });
  }
};

module.exports = TodoActions;
