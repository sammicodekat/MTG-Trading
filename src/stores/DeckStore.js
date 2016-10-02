import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let _deck = [];


class DeckStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'ADD_CARD':
        _deck.push(action.payload.card);
        console.log('deck in store:', _deck)
        this.emit('CHANGE');
        break;
        case 'DELETE_CARD':
        let {id} = action.payload;
        _deck =_deck.filter( card => card.card.multiverseid !== id);
        this.emit('CHANGE');
        break;
      }
    })
  }

  startListening(cb){
    this.on('CHANGE',cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE',cb)
  }

  getDeck(){
    return _deck;
  }
}

export default new DeckStore;
