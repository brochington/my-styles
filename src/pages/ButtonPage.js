import React from 'react'

class ButtonPage extends React.Component {
    render() {
        return (
            <div className="row justify-around flex-wrap mt2">
                <button className="btn">Default</button>
                <button className="btn disabled">disabled Default</button>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-success">Success</button>
                <button className="btn btn-info">Info</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-danger">Danger</button>
                <button className="btn btn-disabled">Disabled</button>
            </div>
        )
    }
}

export default ButtonPage;
