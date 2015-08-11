'use strict'

import { Container as SigninContainer } from './component/signin'
import { newContact, newMessage } from './component/chatroom'
import React from 'react'

require('./index.scss')

window.init = () => {
  React.render(<SigninContainer></SigninContainer>, document.body)
}

/**
 * just for test
 */

window.newContact = newContact

window.newMessage = newMessage

// contacts

newContact('1', {
  uid: '1',
  name: 'test1'
})

newContact('2', {
  uid: '2',
  name: 'test2'
})

newContact('3', {
  uid: '3',
  name: 'test3'
})

// messages

newMessage('1', {
  uid: '1',
  type: 'incoming',
  text: 'hello, world - test1'
})

newMessage('1', {
  uid: '1',
  type: 'outgoing',
  text: 'hello, world - test1'
})

newMessage('2', {
  uid: '2',
  type: 'incoming',
  text: 'hello, world - test2'
})

newMessage('2', {
  uid: '2',
  type: 'outgoing',
  text: 'hello, world - test2'
})

newMessage('3', {
  uid: '3',
  type: 'incoming',
  text: 'hello, world - test3'
})

newMessage('3', {
  uid: '3',
  type: 'outgoing',
  text: 'hello, world - test3'
})

