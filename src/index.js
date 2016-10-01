import React from 'react'
import { render } from 'react-dom'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import Layout from './components/Layout'
import SearchPage from './components/SearchPage'
import DetailPage from './components/DetailPage'


render(
  <Router history ={browserHistory}>
    <Route path ='/' component ={Layout}>

    <Route path ='/search' component ={SearchPage}/>
    <Route path ='/detail/:id' component ={DetailPage}/>

    </Route>
  </Router>,
  document.getElementById('root')
);
