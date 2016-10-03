import React, { Component } from 'react'
import DeckStore from '../stores/DeckStore'
import { browserHistory } from 'react-router'
import CardActions from '../actions/CardActions'

export default class Deck extends Component {
  constructor() {
    super();

    this.state = {
      deck: DeckStore.getDeck()
    }
    this._onChange=this._onChange.bind(this);
  }

  componentWillMount(){
    DeckStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    DeckStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      deck: DeckStore.getDeck()
    })
  }
  _selectCard(id){
    browserHistory.push(`/mtg/detail/${id}`);
  }

  _deleteCard(id){
   CardActions.delete(id);
  }

  render() {
    // console.log('deck', this.state.deck);
    let {deck} = this.state;
    let name='';
    let Cards='';
    if(deck) {

      Cards = deck.map(card => {
        let { name, multiverseid, imageUrl, id, uuid } = card.card;
        return (
          <div key={uuid} className = "col-sm-3 col-md-3 col-lg-3" >
          <div className = "innerbox">
            <button onClick={this._selectCard.bind(null, multiverseid)} className="btn btn-default black">
              <img src={imageUrl} alt={name} className="card-image"/>
            </button>
            <button onClick={this._deleteCard.bind(null, uuid)} className="btn btn-danger delete">X</button>
            </div>
          </div>
        )
      })
    }

    return (
      <div className='inline'>{Cards}</div>
    )
  }
}
