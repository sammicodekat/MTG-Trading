import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let _card = null;


class DetailStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_DETAIL':
        _card = action.payload.card;
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
