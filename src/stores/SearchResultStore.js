import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher'

let _cards = null;
let _cardList = null;


class SearchStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_CARDS':
          _cards = action.payload.data;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_CARD_LIST':
          _cardList = action.payload.data;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb)
  }

  get() {
    return _cards;
  }

  getList() {
    return _cardList;
  }
}
export default new SearchStore;
