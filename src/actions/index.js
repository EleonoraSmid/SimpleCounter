export const add = 'ADD_NUMBER';
export const remove = 'REMOVE_NUMBER';

export const counter = {
  check: 0
}
export const ADD_NUMBER = (check) => {
  return {
    type: add, check
  }
}

export const REMOVE_NUMBER = (check) => {
  return {
    type: remove, check
  }
}
