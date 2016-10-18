import React from 'react'

class FormsPage extends React.Component {
    render() {
        return (
            <div className="column">
                <div className="column">
                    <label htmlFor="text1">Text 1</label>
                    <input type="text" id="text1" />
                </div>
                <div className="column">
                    <label htmlFor="textarea1">Text Area 1</label>
                    <input type="textarea" id="textarea1" />
                </div>
            </div>
        )
    }
}

export default FormsPage;
