const redux = require("redux");


// Reducer

const initializeState = {
    counter : 0,
    result : 0
}

function rootReducer(state = initializeState, action){
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            ...state,
            counter : state.counter - 1
        }
    }
    return state;
}

// Create Store
const store = redux.createStore(rootReducer);

// Subscription

store.subscribe(() => {
    console.log(store.getState());
})

// Dispatch Action

store.dispatch({type : "INCREMENT"})
store.dispatch({type : "DECREMENT"})




