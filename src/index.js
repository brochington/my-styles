import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './App'

/* Pages */
import HomePage from './pages/HomePage'
import TypographyPage from './pages/TypographyPage'
import ColorPage from './pages/ColorPage'
import FlexboxPage from './pages/FlexboxPage'
import ImagesPage from './pages/ImagesPage'
import WidthPage from './pages/WidthPage'
import BorderPage from './pages/BorderPage'
import FormsPage from './pages/FormsPage'
import ButtonPage from './pages/ButtonPage'
import HiddenPage from './pages/HiddenPage'
import ListPage from './pages/ListPage'
import CodePage from './pages/CodePage'


/* my css files */
import './css/index.css'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path='/' component={HomePage} />
            <Route path='/typography' component={TypographyPage} />
            <Route path='/colors' component={ColorPage} />
            <Route path='/flexbox' component={FlexboxPage} />
            <Route path='/images' component={ImagesPage} />
            <Route path='/width' component={WidthPage} />
            <Route path='/border' component={BorderPage} />
            <Route path='/forms' component={FormsPage} />
            <Route path='/buttons' component={ButtonPage} />
            <Route path='/hidden' component={HiddenPage} />
            <Route path='/lists' component={ListPage} />
            <Route path='/code' component={CodePage} />
        </Route>
    </Router>,
  document.getElementById('root')
)
