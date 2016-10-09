import React from 'react'

class WidthPage extends React.Component {
    render() {
        return (
            <div className="column">
                <div className="flex" style={{height: 100}}>
                    <div className="aw5 border">
                    </div>
                    <div className="aw10 border">
                    </div>
                    <div className="flex aw30 border">
                        <div className="aw80 border">
                        </div>
                    </div>
                </div>
                <div className="flex w50 border" style={{height: 100}}>

                </div>
                <div className="flex vw50 border" style={{height: 100}}>

                </div>
                <div className="flex aw50 border" style={{height: 100}}>

                </div>
                <div className="flex w50 xs-w100 border" style={{height: 100}}>

                </div>
            </div>
        )
    }
}

export default WidthPage;
