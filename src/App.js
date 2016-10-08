import React, { Component } from 'react'
import { Link } from 'react-router'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App flex">
        <div className="flex-column grow-1">
            <h1>My CSS</h1>
            <div className="column">
                <Link to="/typography">Typography</Link>
                <Link to="/images">Images</Link>
                <Link to="/flexbox">Flexbox</Link>
            </div>
        </div>
        <div className="grow-3">
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
