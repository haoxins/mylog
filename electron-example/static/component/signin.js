'use strict'

import { Chatroom } from './chatroom'
import React from 'react'

class Container extends React.Component {
  signin() {
    React.render(<Chatroom></Chatroom>, document.body)
  }

  render() {
    return (
      <div className='signin-container'>
        <div className='form'>
          <p>
            <input type='text' placeholder='手机号/用户名' />
          </p>
          <p>
            <input type='password' placeholder='密码' />
          </p>
          <p>
            <button className='loginBtn' onClick={this.signin.bind(this)}>立即登录</button>
          </p>
        </div>
      </div>
    )
  }
}

export { Container }
