import React from 'react'

class ColorPage extends React.Component {
    render() {
        return (
            <div className="row flex-wrap mt2">
                <div className="w100 py2 mb1 column">
                    <h4 className="mb1">Primary</h4>
                    <div className="row w100 justify-around">
                        <div className="p3 pill bgd-primary" />
                        <div className="p3 pill bgd-primary-lighter" />
                        <div className="p3 pill bgd-primary-lightest" />
                        <div className="p3 pill bgd-primary-darker" />
                        <div className="p3 pill bgd-primary-darkest" />
                    </div>
                </div>
                <div className="w100 py2 mb1 column">
                    <h4 className="mb1">Secondary</h4>
                    <div className="row w100 justify-around">
                        <div className="p3 pill bgd-secondary" />
                        <div className="p3 pill bgd-secondary-lighter" />
                        <div className="p3 pill bgd-secondary-lightest" />
                        <div className="p3 pill bgd-secondary-darker" />
                        <div className="p3 pill bgd-secondary-darkest" />
                    </div>
                </div>
                <div className="w100 py2 mb1 column">
                    <h4 className="mb1">Gray Scale</h4>
                    <div className="row w100 justify-around">
                        <div className="p3 pill bgd-gray" />
                        <div className="p3 pill bgd-gray-lighter" />
                        <div className="p3 pill bgd-gray-lightest" />
                        <div className="p3 pill bgd-gray-darker" />
                        <div className="p3 pill bgd-gray-darkest" />
                    </div>
                </div>
                <div className="w100 py2 mb1 column">
                    <h4 className="mb1">Action</h4>
                    <div className="row w100 justify-around">
                        <div className="p3 pill bgd-default ba b-dark" />
                        <div className="p3 pill bgd-success" />
                        <div className="p3 pill bgd-info" />
                        <div className="p3 pill bgd-warning" />
                        <div className="p3 pill bgd-danger" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorPage;
