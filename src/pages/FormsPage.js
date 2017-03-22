import React from 'react'

class FormsPage extends React.Component {
    render() {
        return (
            <form>
                <fieldset>
                    <legend className="h4 mb2">Test Form 1</legend>
                    <div className="column vw50">
                        <div className="column">
                            <label htmlFor="text1">Text 1</label>
                            <input type="text" id="text1" />
                        </div>
                        <div className="row">
                            <div className="column mr2">
                                <label htmlFor="text2">Text 2</label>
                                <input type="text" id="text2" />
                            </div>
                            <div className="column">
                                <label htmlFor="text3">Text 3</label>
                                <input type="text" id="text3" />
                            </div>
                        </div>
                        <div className="column">
                            <div className="row align-center w50">
                                <label className="w30" htmlFor="text4">Text 4</label>
                                <input type="text" id="text4" className="w50"/>
                            </div>
                            <div className="row align-center w50">
                                <label className="w30" htmlFor="text5">Text 5</label>
                                <input type="text" id="text5" className="w50"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row align-center w50">
                                <label className="w30" htmlFor="text4">Text 4</label>
                                <input type="text" id="text4" className="w50"/>
                            </div>
                            <div className="row align-center justify-start w50">
                                <label className="w30" htmlFor="text5">Text 5</label>
                                <input type="text" id="text5" className=""/>
                            </div>
                        </div>
                        <div className="column">
                            <label htmlFor="textarea1">Text Area 1</label>
                            <input type="textarea" id="textarea1" />
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default FormsPage;
