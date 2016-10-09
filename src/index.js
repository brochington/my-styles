import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './App'
import './index.css'

/* Pages */
import HomePage from './pages/HomePage'
import TypographyPage from './pages/TypographyPage'
import FlexboxPage from './pages/FlexboxPage'
import ImagesPage from './pages/ImagesPage'
import WidthPage from './pages/WidthPage'


/* my css files */
import './css/normalize.css'
import './css/sanitize.css'
import './css/basics.css'

import './css/keyframes.css'
import './css/animations.css'

import './css/heading.css'
import './css/flex.css'
import './css/margin.css'
import './css/padding.css'
import './css/typography.css'
import './css/images.css'
import './css/width.css'
import './css/height.css'
import './css/maxWidth.css'

import './css/border.css'



ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path='/' component={HomePage} />
            <Route path='/typography' component={TypographyPage} />
            <Route path='/flexbox' component={FlexboxPage} />
            <Route path='/images' component={ImagesPage} />
            <Route path='/width' component={WidthPage} />
        </Route>
    </Router>,
  document.getElementById('root')
)
