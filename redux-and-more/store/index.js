'use strict'

import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reducer from '../reducer'

const createStoreWithMiddleware = applyMiddleware(
  reduxPromise,
  reduxLogger,
  reduxThunk
)(createStore)

const store = createStoreWithMiddleware(reducer)

export default store
