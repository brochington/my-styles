import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/*<div className="h1 larger">Heading 1, larger</div>
        <div className="h1">Heading 1</div>
        <div className="h1 smaller">Heading 1, smaller</div>

        <div className="h2 larger">Heading 2, larger</div>
        <div className="h2">Heading 2</div>
        <div className="h2 smaller">Heading 2, smaller</div>

        <div className="h3 larger">Heading 3, larger</div>
        <div className="h3">Heading 3</div>
        <div className="h3 smaller">Heading 3, smaller</div>

        <div className="h4 larger">Heading 4, larger</div>
        <div className="h4">Heading 4</div>
        <div className="h4 smaller">Heading 4, smaller</div>

        <div className="h5 larger">Heading 5, larger</div>
        <div className="h5">Heading 5</div>
        <div className="h5 smaller">Heading 5, smaller</div>

        <div className="h6 larger">Heading 6, larger</div>
        <div className="h6">Heading 6</div>
        <div className="h6 smaller">Heading 6, smaller</div>
        <div className="column mt1">
            <span className="larger">This is a large span</span>
            <span>This is a span</span>
            <span className="smaller">This is a small span</span>
        </div>
        <div className="column mt1">
            <span className="bold">bold</span>
            <span className="underline">underline</span>
            <span className="italic">italic</span>
            <span className="caps">caps</span>
        </div>*/}
        <div className="flex justify-around flex-wrap mx2">
            <div>
                <img className="fit" alt="" src="http://placehold.it/350x150" />
            </div>
            <div>
                <img className="fit" alt="" src="http://placehold.it/350x150" />
            </div>
            <div>
                <img className="fit" alt="" src="http://placehold.it/350x150" />
            </div>
        </div>
        <div className="flex justify-around items-center flex-wrap mx2">
            <div>
                <img className="fit" alt="" src="http://placehold.it/350x150" />
            </div>
            <div>
                <img className="fit" alt="" src="http://placehold.it/150x350" />
            </div>
            <div>
                <img className="fit" alt="" src="http://placehold.it/350x150" />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
