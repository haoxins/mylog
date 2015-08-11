'use strict'

const store = {
  count: 123
}

class Item extends React.Component {
  static defaultProps = {
    initialCount: 10086
  }

  constructor(props) {
    super(props)

    Object.observe(store, (changes) => {
      changes.forEach((change) => {
        this.setState({
          [change.name]: change.object[change.name]
        })
      })
    })

    this.state = {
      title: 'hello world',
      count: props.initialCount | 0
    }
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>hello</p>
        <p>count: {this.state.count}</p>
        <button onClick={this.addCount.bind(this)}>add</button>
      </div>
    )
  }
}

export { Item, store }
