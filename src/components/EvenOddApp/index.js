import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandom = () => Math.ceil(Math.random() * 100)

  onIncrementButton = () => {
    const randomNumber = this.getRandom()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-contaier">
        <div className="counter-card">
          <h1 className="count">Count {count}</h1>
          <p className="count-name">Count is {displayText}</p>
          <button
            type="button"
            className="count-button"
            onClick={this.onIncrementButton}
          >
            Increment
          </button>
          <p className="count-name">
            Increase by Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
