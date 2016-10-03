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
    let { card } = this.state;
    let Name, imageUrl, type, power, toughness, rarity, setName , text, color, colorStr, flavor, artist, cost, url = '';

    if(card) {
      // console.log('card:', card);
      Name = card.card.name;
      imageUrl = card.card.imageUrl;
      type = card.card.type;
      power = card.card.power;
      toughness = card.card.toughness;
      rarity = card.card.rarity;
      setName = card.card.setName;
      text = card.card.text;
      color = card.card.colors;
      flavor = card.card.flavor;
      artist = card.card.artist;
      cost = card.card.manaCost;
      url = `https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=mtg+${Name.split(' ').join('+')}`;
      if(color){
        color.length == 1 ? (colorStr=color[0]): (colorStr=color[0]+'/'+color[1]);
      }
    }

    return (
      <div className='container center'>
        <div className ="detail">
          <h3 className ="title" >{Name}</h3>
          <div className ="col-xs-6 card card-container">
            <img src={imageUrl} alt={Name}/>
            <Link  to='/deck' className="btn btn-default button" onClick={this.addToDeck}>Add to Deck</Link>
            <a href={url} target="_blank"><img src="https://1.bp.blogspot.com/-xXJU6yWkjkM/V14WGAKkAVI/AAAAAAAAIMw/mh1ykJweeBodMLUEcL_BxIcUNE860_NCQCLcB/s1600/amazon-buy-button-png1.png" className="amazon" alt="Buy on Amazon"/></a>
          </div>
          <div className ="col-xs-6 card card-container des">
            <ul className ="list-group">
              <li className = "list-group-item"><b>Type:</b> {type}</li>
              <li className = "list-group-item"><b>Power and Toughness:</b> {power}/{toughness}</li>
              <li className = "list-group-item"><b>Cost: </b>{cost}</li>
              <li className = "list-group-item"><b>Colors: </b>{colorStr}</li>
              <li className = "list-group-item"><b>Rarity: </b>{rarity}</li>
              <li className = "list-group-item"><b>Set: </b>{setName}</li>
              <li className = "list-group-item"><b>Text: </b>{text}</li>
              <li className = "list-group-item"><b>Flavor: </b>{flavor}</li>
              <li className = "list-group-item"><b>Artist: </b>{artist}</li>


            </ul>
          </div>
        </div>
      </div>
    )
  }
}
