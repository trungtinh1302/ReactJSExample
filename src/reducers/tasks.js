import * as types from './../constants/actionType';

var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];

var myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_ALL:
            return state;
            break;
    
        default:
            return state;  
            break;
    }
};

export default myReducer;