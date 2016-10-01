import React, { Component } from 'react'
import SearchStore from '../stores/SearchResultStore'
import {browserHistory} from 'react-router'

export default class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      cards: SearchStore.get()
    }
    this._onChange=this._onChange.bind(this);
  }

  componentWillMount(){
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    SearchStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      cards: SearchStore.get()
    })
  }

  _selectCard(id){
    console.log(id);
    browserHistory.push(`/detail/${id}`);
  }

  render() {
    let {cards} = this.state;
    let name='';
    let Cards='';
    if(cards) {

      Cards = cards.cards.map(card => {
        let { name, multiverseid, imageUrl, id } = card;
        return (
          <button key={id} onClick={this._selectCard.bind(null, multiverseid)} className="btn btn-default">
            <img src={imageUrl} alt={name}/>
          </button>
        )
      })
    }
    return (
      <div className='container'>
        {Cards}
      </div>
    )
  }
}
