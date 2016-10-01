import React, { Component } from 'react'
import CardActions from '../actions/CardActions'
import DetailStore from '../stores/DetailStore'

export default class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      card: DetailStore.getCard()
    }
    this._onChange=this._onChange.bind(this);
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

  render() {
    console.log('card:', this.state.card);
    let { card } = this.state;
    let Name, imageUrl, type, power, toughness, rarity, setName = '';

    if(card) {
      // console.log('card:', card);
      Name = card.card.name;
      imageUrl = card.card.imageUrl;
      type = card.card.type;
      power = card.card.power;
      toughness = card.card.toughness;
      rarity = card.card.rarity;
      setName = card.card.setName;
    }

    return (
      <div className='container center'>
      <h3>{Name}</h3>
      <img src={imageUrl} alt={Name}/>

      <ul>
      <li>Type: {type}</li>
      <li>Power and Toughness: {power}/{toughness}</li>
      <li>Colors: </li>
      <li>Rarity: {rarity}</li>
      <li>Set: {setName}</li>
      <li></li>
      </ul>

      </div>
    )
  }
}
