'use strict'

export const ADD_TODO_ITEM_ASYNC = 'ADD_TODO_ITEM_ASYNC'
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'

export const addTodoItem = (title, content) => {
  return {
    type: ADD_TODO_ITEM,
    item: {
      title,
      content
    }
  }
}

const _addTodoItemAsync = (title, content) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title,
        content
      })
    }, 2000)
  })
}

export const addTodoItemAsync = (title, content) => {
  return (dispatch) => {
    return _addTodoItemAsync('xx', 'oo')
      .then((item) => {
        dispatch(addTodoItem(item.title, item.content))
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
