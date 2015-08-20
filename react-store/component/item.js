'use strict'

import store from '../store'

class Item1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'origin title - item1',
      count: 0,
      item: {
        name: 'origin name - item1',
        desc: 'origin desc - item1'
      }
    }

    store.register('title', (title) => {
      this.setState({
        title: title
      })
    })

    store.register('items', (items) => {
      this.setState({
        count: items.length,
        item: items[items.length - 1]
      })
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <p>
          <div>{this.state.count}</div>
          <div>
            <span>{this.state.item.info}</span>
            <span>{this.state.item.name}</span>
          </div>
        </p>
      </div>
    )
  }
}

class Item2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'origin title - item2',
      count: 0,
      item: {
        name: 'origin name - item2',
        desc: 'origin desc - item2'
      }
    }

    store.register('title', (title) => {
      this.setState({
        title: title
      })
    })

    store.register('items', (items) => {
      this.setState({
        count: items.length,
        item: items[items.length - 1]
      })
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <p>
          <div>{this.state.count}</div>
          <div>
            <span>{this.state.item.info}</span>
            <span>{this.state.item.name}</span>
          </div>
        </p>
      </div>
    )
  }
}

export { Item1, Item2 }
