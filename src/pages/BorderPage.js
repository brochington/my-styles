import React from 'react'

class BorderPage extends React.Component {
    render() {
        return (
            <div className="mu-column so-row mu-justify-around so-vh20 mu-vh100 ">
                <div className="w30 so-w50 ml2 so-ml1 border bw1 br1">
                    <div className="flex-center vh10">
                        border 1
                    </div>
                </div>
                <div className="w30 so-w50 ml2 so-ml1 border bw2 br2">
                    <div className="flex-center vh10">
                        border 2
                    </div>
                </div>
                <div className="w30 so-w50 ml2 so-ml1 border bw3 br3">
                    <div className="flex-center vh10">
                        border 3
                    </div>
                </div>
                <div className="w30 so-w50 ml2 so-ml1 border bw4 br4">
                    <div className="flex-center vh10">
                        border 4
                    </div>
                </div>
                <div className="w30 so-w50 ml2 so-ml1 border bw5 br5">
                    <div className="flex-center vh10">
                        border 5
                    </div>
                </div>

            </div>
        )
    }
}

export default BorderPage;
