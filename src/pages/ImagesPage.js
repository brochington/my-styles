import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
            <div>
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
        )
    }
}

export default HomePage
