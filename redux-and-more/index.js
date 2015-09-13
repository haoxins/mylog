'use strict'

import { Provider } from 'react-redux'
import App from './container/app'
import { render } from 'react'
import store from './store'

window.init = () => {
  render(
    <Provider store={store}>
      {() => <App />}
    </Provider>,
    document.body
  )
}
