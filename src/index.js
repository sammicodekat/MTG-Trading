import React from 'react'
import { render } from 'react-dom'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import Layout from './components/Layout'
import SearchPage from './components/SearchPage'
import DetailPage from './components/DetailPage'
import Deck from './components/Deck'
import BrowseCards from './components/BrowseCards'

render(
  <Router history ={browserHistory}>
    <Route path = '/' component={Layout}>
      <IndexRoute component={BrowseCards}/>

      <Route path = '/search' component={SearchPage}/>
      <Route path = '/detail/:id' component={DetailPage}/>
      <Route path = '/deck' component={Deck}/>

    </Route>
  </Router>,
  document.getElementById('root')
);
