import React, { Component } from 'react'
import CardActions from '../actions/CardActions'


export default class SearchForm extends Component {
  constructor() {
    super();
    this._submitForm = this._submitForm.bind(this);
  }
  _submitForm(e){
    e.preventDefault();
    let {name} = this.refs;
    let cardName = name.value;
    name.value ='';
    CardActions.searchCard(cardName);
  }

  render() {
    return (
      <div className="center">
      <form className="form-inline" onSubmit = {this._submitForm}>
        <div className="form-group">
            <label className="sr-only" >Search by Card Names</label>
            <input ref ='name' type="text" className="form-control"  placeholder=""/>
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
      </div>
    )
  }
}
