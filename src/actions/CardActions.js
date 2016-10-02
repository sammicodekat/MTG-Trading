import API from '../API'
import AppDispatcher from '../AppDispatcher'

const CardActions ={
  searchCard(query) {
    API.searchCard(query);
  },

  searchDetail(id) {
    API.searchDetail(id);
  },

  getCardList(page) {
    API.getCardList(page);
  },

  addToDeck(card) {
    AppDispatcher.dispatch({
      type: 'ADD_CARD',
      payload: { card }
    })
    // console.log('card in actions:', card)
  },

  delete(id){
    AppDispatcher.dispatch({
      type: 'DELETE_CARD',
      payload: { id }
    })
  }
}

export default CardActions;
