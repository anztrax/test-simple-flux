var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require("../constants/TodoConstants");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var total = 0;

function incrementTotal(){
  total = total + 2;
}

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getTotalCount : function(){
    return total;
  }
});

AppDispatcher.register(function(payload){
  console.log(payload);

  switch(payload.actionType){
    case TodoConstants.TODO_INCREMENT_TOTAL :
      incrementTotal();
      console.log("total : ",total);
      break;
  }
});

module.exports = AppStore;
