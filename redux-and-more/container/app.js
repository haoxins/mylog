'use strict'

import { connect } from 'react-redux'
import Todo from '../component/todo'

function filter(state) {
  /**
   * 1. map `state` to `props`
   * 2. namespace - `todo`: combineReducers({ todo })
   */
  return {
    todos: state.todo.todos
  }
}

export default connect(filter)(Todo)
