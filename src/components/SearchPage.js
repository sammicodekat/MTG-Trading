import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

export default class SearchPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
      <div className='row'>
      <SearchForm />
      </div>
      <div className="row">
      <SearchResults />
      </div>
      </div>
    )
  }
}
