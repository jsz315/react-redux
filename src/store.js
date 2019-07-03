import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

let initNum = {num: 10}
var numReducer = function(state = initNum, action) {
    switch(action.type){
        case 'ADD_NUM':
            return Object.assign({}, {num: state.num + 1});
        case 'CUT_NUM':
            return Object.assign({}, {num: state.num - 1});
        case 'SET_NUM':
            return Object.assign({}, {num: Number(action.value)});
        default:
            return state;
    }
}

let initNames = []
var namesReducer = function(state = initNames, action){
    switch(action.type){
        case 'ADD_NAME':
            console.log("add name : " + action.name)
            return [...state, action.name]
        case 'CUT_NAME':
            return state.filter(item=>item!==action.name)
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    numReducer,
    namesReducer
})

var store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
store.subscribe(()=>{
    // console.log(store.getState())
})

// store.dispatch({type: "ADD_NUM"})
// store.dispatch({type: "ADD_NAME", name: "jsz"})
// store.dispatch({type: "ADD_NAME", name: "tom"})
// store.dispatch({type: "ADD_NUM"})
// store.dispatch(dispatch=>{
//     setTimeout(() => {
//         dispatch({type: "CUT_NAME", name: "jsz"});
//     }, 3000);
// })
// store.dispatch({type: "ADD_NAME", name: "jay"})
export default store;