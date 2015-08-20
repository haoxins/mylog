'use strict'

import { Item1, Item2 } from './component/item'
import React from 'react'

window.init = function() {
  React.render(<Item1 />, document.querySelector('#item1'))
  React.render(<Item2 />, document.querySelector('#item2'))
}
