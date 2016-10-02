import React, { Component } from 'react'
import { Link } from 'react-router'

import CardActions from '../actions/CardActions'
import DetailStore from '../stores/DetailStore'

export default class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      card: DetailStore.getCard()
    }
    this._onChange = this._onChange.bind(this);
    this.addToDeck = this.addToDeck.bind(this);
  }

  componentWillMount() {
    let { id } = this.props.params;
    CardActions.searchDetail(id);
    DetailStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    DetailStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      card: DetailStore.getCard()
    })
  }

  addToDeck() {
    CardActions.addToDeck(this.state.card);
  }

  render() {
    console.log('card:', this.state.card);
    let { card } = this.state;
    let Name, imageUrl, type, power, toughness, rarity, setName , text, color, colorStr= '';

    if(card) {
      // console.log('card:', card);
      Name = card.card.name;
      imageUrl = card.card.imageUrl;
      type = card.card.type;
      power = card.card.power;
      toughness = card.card.toughness;
      rarity = card.card.rarity;
      setName = card.card.setName;
      text = card.card.text
      color = card.card.colors;
      if(color){
      color.length == 1 ? (colorStr=color[0]): (colorStr=color[0]+'/'+color[1]);
    }
    }

    return (
      <div className='container center detail'>
        <h3>{Name}</h3>
        <img src={imageUrl} alt={Name}/>

        <Link  to='/deck' className="btn btn-default" onClick={this.addToDeck}>Add to Deck</Link>

        <ul>
          <li>Type: {type}</li>
          <li>Power and Toughness: {power}/{toughness}</li>
          <li>Colors: {colorStr}</li>
          <li>Rarity: {rarity}</li>
          <li>Set: {setName}</li>
          <li>{text}</li>
        </ul>

      </div>
    )
  }
}
