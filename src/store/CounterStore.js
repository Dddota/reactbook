import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const counterValues={
    'First':0,
    'Second':10,
    'Third':30
};

const CounterStore=Object.assign({},EventEmitter.property,{
    getCounterValues:function () {
        return counterValues;
    },
    emitChange:function () {
        this.emit(CHANGE_EVENT);
    },
    addEventListener:function (callback) {
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeLister: function (callback) {
        this.removeListener(CHANGE_EVENT,callback);
    }
});

CounterStore.dispatcherToken = AppDispatcher.register((action) =>{
    if (action.type===ActionTypes.INCREMENT){
        counterValues[action.counterCaption] ++;
        CounterStore.emitChange();
    }else if (action.type===ActionTypes.DECREMENT){
        counterValues[action.counterCaption] --;
        CounterStore.emitChange();
    }
});
