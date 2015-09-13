'use strict'

import { addTodoItem, addTodoItemAsync } from '../action'
import { Component } from 'react'
import store from '../store'

class List extends Component {
  render() {
    const todos = this.props.todos

    return (
      <div>
        {
          todos.map((item) => {
            return (
              <p>{item.title}</p>
            )
          })
        }
      </div>
    )
  }
}

class AddItem extends Component {
  render() {
    return (
      <button onClick={() => { this.props.onClick() }}>add</button>
    )
  }
}

class AddItemAsync extends Component {
  render() {
    return (
      <button onClick={() => { this.props.onClick() }}>add async</button>
    )
  }
}

class Todo extends Component {
  render() {
    const { dispatch, todos } = this.props

    return (
      <div>
        <AddItemAsync onClick={() => {
          dispatch(addTodoItemAsync('xx', 'oo'))
        }} />
        <AddItem onClick={() => {
          dispatch(addTodoItem('xx', 'oo'))
        }} />
        <List todos={todos} />
      </div>
    )
  }
}

export default Todo
