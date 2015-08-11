'use strict'

import { store, Item } from './component/item'
import React from 'react'

window.init = function() {
  React.render(<Item />, document.body)

  setInterval(() => {
    store.count++
  }, 1000)
}
