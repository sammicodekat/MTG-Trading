import React, { Component } from 'react'
import CardActions from '../actions/CardActions'
import SearchResultStore from '../stores/SearchResultStore'
import { browserHistory } from 'react-router'

export default class BrowseCards extends Component {
  constructor() {
    super();
    this.state = {
      cards: SearchResultStore.getList(),
      page: 1
    }
    this._onChange = this._onChange.bind(this);
    this._prev = this._prev.bind(this);
    this._next = this._next.bind(this);
    this._getCards =this._getCards.bind(this);
  }

  componentWillMount(){
    SearchResultStore.startListening(this._onChange);
    CardActions.getCardList(this.state.page);
  }

  componentWillUnmount(){
    SearchResultStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      cards: SearchResultStore.getList()
    })
  }

  _selectCard(id) {
    browserHistory.push(`/detail/${id}`);
  }

  _getCards(){
    let { page } = this.state;
    CardActions.getCardList(page);
  }

  _prev(){
    let {page} = this.state;
    this.setState({
      page: page-1
    }, this._getCards)

  }
  _next(){
    let {page} = this.state;
    this.setState({
      page: page+1
    },this._getCards)
  }

  render() {
    let {cards,page} = this.state;
    let name = '';
    let Cards = '';
    if (cards) {
      Cards = cards.cards.map(card => {
        let { name, multiverseid, imageUrl, id } = card;
        if(name && multiverseid && imageUrl && id) {

          return (
            <button key={id} onClick={this._selectCard.bind(null, multiverseid)} className="btn btn-default black">
              <img src={imageUrl} alt={name} className="card-image"/>
            </button>
          )
        }
      })
    }
    return (
      <div>
        <button disabled={page < 2} onClick ={this._prev} className="btn btn-link"><span className="glyphicon glyphicon-chevron-left"></span> Prev</button>
        <button disabled={page > 9}className="btn btn-link" onClick = {this._next} >Next <span className="glyphicon glyphicon-chevron-right"></span></button>
        <div>{Cards}</div>
        <button disabled={page < 2} onClick ={this._prev} className="btn btn-link"><span className="glyphicon glyphicon-chevron-left"></span> Prev</button>
        <button disabled={page > 9}className="btn btn-link" onClick = {this._next} >Next <span className="glyphicon glyphicon-chevron-right"></span></button>
      </div>

    )
  }
}
