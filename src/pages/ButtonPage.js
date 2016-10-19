import React from 'react'

class ButtonPage extends React.Component {
    render() {
        return (
            <div className="row justify-around">
                <button className="btn">Button 1</button>
                <button className="btn primary">Button 2</button>
                {/* <button className="btn">Button 3</button>
                <button className="btn">Button 4</button>
                <button className="btn">Button 5</button> */}
            </div>
        )
    }
}

export default ButtonPage;
