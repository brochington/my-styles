import React from 'react'

class ListPage extends React.Component {
    render() {
        return (
            <div className="column">
                List Page
                <div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <ol>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default ListPage;
