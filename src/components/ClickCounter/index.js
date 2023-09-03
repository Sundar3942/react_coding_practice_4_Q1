/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  incrementCount = () => {
    this.setState(prevState => {
      console.log(`prev vlaue ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="page">
        <h1 className="main-heading">
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <div>
          <button className="btn" onClick={this.incrementCount}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
