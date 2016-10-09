import React, { Component } from 'react'
import { Link } from 'react-router'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App row so-column">
        <div className="column mu-w33 so-w100">
            <h1>My CSS</h1>
            <div className="column so-row">
                <Link to='/'>Home</Link>
                <Link to="/typography">Typography</Link>
                <Link to="/images">Images</Link>
                <Link to="/flexbox">Flexbox</Link>
                <Link to="/width">Width</Link>
            </div>
        </div>
        <div className="mu-w66 so-w100">
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
