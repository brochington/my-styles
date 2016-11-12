import React from 'react'

class ColorPage extends React.Component {
    render() {
        return (
            <div className="row flex-wrap mt2">
                <div className="w100 py2 mb1 column">
                    <h4 className="mb1">Primary</h4>
                    <div className="row w100 justify-around">
                        <div className="grow-1 vh10 bgd-primary-lightest" />
                        <div className="grow-1 vh10 bgd-primary-lighter" />
                        <div className="grow-1 vh10 bgd-primary" />
                        <div className="grow-1 vh10 bgd-primary-darker" />
                        <div className="grow-1 vh10 bgd-primary-darkest" />
                    </div>
                </div>
                <div className="w100 py2 mb1 column">
                    <h4 className="mb1">Secondary</h4>
                    <div className="row w100 justify-around">
                        <div className="grow-1 vh10 bgd-secondary-lightest" />
                        <div className="grow-1 vh10 bgd-secondary-lighter" />
                        <div className="grow-1 vh10 bgd-secondary" />
                        <div className="grow-1 vh10 bgd-secondary-darker" />
                        <div className="grow-1 vh10 bgd-secondary-darkest" />
                    </div>
                </div>
                <div className="w100 py2 mb1 column">
                    <h4 className="mb1">Gray Scale</h4>
                    <div className="row w100 justify-around">
                        <div className="grow-1 vh10 bgd-gray-lightest" />
                        <div className="grow-1 vh10 bgd-gray-lighter" />
                        <div className="grow-1 vh10 bgd-gray" />
                        <div className="grow-1 vh10 bgd-gray-darker" />
                        <div className="grow-1 vh10 bgd-gray-darkest" />
                    </div>
                </div>
                <div className="w100 py2 mb1 column">
                    <h4 className="mb1">Action</h4>
                    <div className="row w100 justify-around">
                        <div className="grow-1 vh10 bgd-default ba b-dark" />
                        <div className="grow-1 vh10 bgd-success" />
                        <div className="grow-1 vh10 bgd-info" />
                        <div className="grow-1 vh10 bgd-warning" />
                        <div className="grow-1 vh10 bgd-danger" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorPage;
