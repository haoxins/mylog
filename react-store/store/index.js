'use strict'

import Store from './store'

const store = new Store({
  store: {
    title: 'hello',
    items: [{
      name: 'one',
      desc: '> one'
    }, {
      name: 'two',
      desc: '> two'
    }, {
      name: 'three',
      desc: '> three'
    }]
  }
})

const now = () => {
  return Date.now() % 1000000
}

setInterval(() => {
  store.set('title', 'new title - ' + now())
}, 5000)

setInterval(() => {
  store.push('items', {
    name: 'new - ' + now(),
    desc: '> new - ' + now()
  })
}, 1000)

export default store
