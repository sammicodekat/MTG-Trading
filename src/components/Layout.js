import React, { Component } from 'react'
import {Link} from 'react-router'
import classNames from 'classnames'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    let path = this.props.location.pathname;
    return (
      <div className='container'>
      <ul className="nav nav-tabs">
        <li role="presentation" className={classNames({active: path === '/search'})}><Link to ='/search'>Search</Link></li>
      </ul>
        <h1 className='text-center'>MTG</h1>
        {this.props.children}
      </div>
    )
  }
}
