import React from 'react'

class ButtonPage extends React.Component {
    render() {
        return (
            <div className="column justify-around flex-wrap mt2">
              <div className="row flex-wrap">
                <button className="btn m1">Default</button>
                <button className="btn m1 disabled">disabled Default</button>
                <button className="btn m1 btn-primary">Primary</button>
                <button className="btn m1 btn-success">Success</button>
                <button className="btn m1 btn-info">Info</button>
                <button className="btn m1 btn-warning">Warning</button>
                <button className="btn m1 btn-danger">Danger</button>
                <button className="btn m1 btn-disabled">Disabled</button>
              </div>

            </div>
        )
    }
}

export default ButtonPage;
