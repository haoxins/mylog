'use strict'

import { getMsgQueueById, getContacts, addContact, addMessage } from './store'
import { refVal, clear } from 'react-util'
import React from 'react'

const data = {
  trigger: 1, // just trigger observer
  currentUID: '1',
  contacts: getContacts(),
  messages: [] // new messages
}

class Contact extends React.Component {
  render() {
    let contact = this.props.contact

    return (
      <p className='contact'>
        <span>{contact.name}</span>
      </p>
    )
  }
}

class ContactBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: data.contacts
    }

    Object.observe(data, () => {
      this.setState({
        contacts: data.contacts
      })
    })
  }

  render() {
    return (
      <div className='contact-box'>
        <div className='status-bar'></div>
        <div className='contacts'>
        {
          this.state.contacts.map((contact) => {
            return (<Contact contact={contact}></Contact>)
          })
        }
        </div>
      </div>
    )
  }
}

class Message extends React.Component {
  render() {
    let msg = this.props.msg || {}

    let msgStyle, textStyle

    if (msg.type === 'incoming') {
      msgStyle = {
        flexDirection: 'row'
      }

      textStyle = {
        textAlign: 'left'
      }
    } else {
      msgStyle = {
        flexDirection: 'row-reverse'
      }

      textStyle = {
        textAlign: 'right'
      }
    }

    let imgUrl = msg.imgUrl || 'asset/icon-big.png'

    return (
      <div className='msg' style={msgStyle}>
        <span className='avatar'>
          <img src={imgUrl} />
        </span>
        <span className='text' style={textStyle}>
          {msg.text}
        </span>
      </div>
    )
  }
}

class MessageBox extends React.Component {
  constructor(props) {
    super(props)

    let uid = props.uid || data.currentUID
    let messages = getMsgQueueById(uid).all() || []

    this.state = {
      messages: messages
    }

    Object.observe(data, () => {
      uid = data.currentUID
      let msg

      data.messages.forEach((message) => {
        if (message.uid === uid) {
          this.state.messages.push(message)
          this.setState({
            messages: this.state.messages
          })
        }
      })
      // then - sync to store
      while (msg = data.messages.pop()) {
        addMessage(msg.uid, msg)
      }
    })
  }

  render() {
    return (
      <div className='message-box'>
        <div className='status-bar'>
        </div>
        <div className='msgs'>
          {
            this.state.messages.map((msg) => {
              return (
                <Message msg={msg}></Message>
              )
            })
          }
        </div>
      </div>
    )
  }
}

class SendMsgBox extends React.Component {
  clickSend() {
    let text = this::refVal('send-msg-text')
    this::clear('send-msg-text')
  }

  render() {
    return (
      <div className='send-msg-box'>
        <div className='text'>
          <textarea ref='send-msg-text' placeholder='点击回车或发送按钮发送消息'></textarea>
        </div>
        <div className='send'>
          <button onClick={this.clickSend.bind(this)}>发送</button>
        </div>
      </div>
    )
  }
}

class Chatroom extends React.Component {
  render() {
    return (
      <div className='chatbox'>
        <span>
          <MessageBox></MessageBox>
          <SendMsgBox></SendMsgBox>
        </span>
        <span>
          <ContactBox></ContactBox>
        </span>
      </div>
    )
  }
}

function newContact(uid, contact) {
  addContact(uid, contact)

  data.contacts = getContacts()
  trigger()
}

function newMessage(uid, message) {
  data.messages.push(message)
  trigger()

  let queue = getMsgQueueById(uid)
  queue.push(message)
}

function trigger() {
  data.trigger = (data.trigger++) % 100
}

export {
  Chatroom,
  newContact,
  newMessage
}
