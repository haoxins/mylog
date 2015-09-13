'use strict'

import { ADD_TODO_ITEM, ADD_TODO_ITEM_ASYNC } from '../action'

const defaultState = {
  todos: []
}

function todo(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        todos: [...state.todos, action.item]
      }
    case ADD_TODO_ITEM_ASYNC:
      return {
        todos: [...state.todos, action.item]
      }
    default:
      return state
  }
}

export default todo
