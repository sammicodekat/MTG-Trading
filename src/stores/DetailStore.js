import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'
import uuid from 'uuid'

let _card = null;

class DetailStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_DETAIL':
        _card = action.payload.card;
        _card.card.uuid = uuid();
        // console.log('card in store', _card);
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

  getCard(){
    return _card;
  }
}

export default new DetailStore;
