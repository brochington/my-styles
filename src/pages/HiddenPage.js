import React from 'react'

class HiddenPage extends React.Component {
    render() {
        return (
            <div className="row flex-wrap mt2">
                <div className="ba w100 py2 my1 so-hide vh10 flex-center">
                    Hidden Small Only
                </div>
                <div className="ba w100 py2 my1 mu-hide vh10 flex-center">
                    Hidden Medium Up
                </div>
                <div className="ba w100 py2 my1 mo-hide vh10 flex-center">
                    Hidden Medium Only
                </div>
                <div className="ba w100 py2 my1 lu-hide vh10 flex-center">
                    Hidden Large Up
                </div>
                <div className="ba w100 py2 my1 lo-hide vh10 flex-center">
                    Hidden Large Only
                </div>
                <div className="ba w100 py2 my1 so-show vh10 flex-center">
                    Show Small Only
                </div>
                <div className="ba w100 py2 my1 mu-show vh10 flex-center">
                    Show Medium Up
                </div>
                <div className="ba w100 py2 my1 mo-show vh10 flex-center">
                    Show Medium Only
                </div>
                <div className="ba w100 py2 my1 lu-show vh10 flex-center">
                    Show Large Up
                </div>
                <div className="ba w100 py2 my1 lo-show vh10 flex-center">
                    Show Large Only
                </div>
            </div>
        )
    }
}

export default HiddenPage;
