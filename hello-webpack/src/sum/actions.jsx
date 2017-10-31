import {ADD_TO_SUM, SUBTRACT_FROM_SUM} from './constants';

export const addToSum = (adder) => {
  return {
    type: ADD_TO_SUM,
    adder
  };
};

export const subtractFromSum = (subtractor) => {
  return {
    type: SUBTRACT_FROM_SUM,
    subtractor
  };
};