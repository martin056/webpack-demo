import {ADD_TO_SUM, SUBTRACT_FROM_SUM} from './constants';

const initialState = {amount: 0};

const sumReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_SUM:
      var newState = {amount: state.amount + action.adder};

      return Object.assign({}, state, newState);

    case SUBTRACT_FROM_SUM:
      var newState = {amount: state.amount - action.subtractor};

      return Object.assign({}, state, newState);

    default:
      return state;
  }
}

export default sumReducer;