import AppDispatcher from '../AppDispatcher'


const ServerActions ={
  receiveCards(data){
    AppDispatcher.dispatch({
      type:'RECEIVE_CARDS',
      payload: { data }
    })
  },

  receiveDetail(card){
    AppDispatcher.dispatch({
      type:'RECEIVE_DETAIL',
      payload: { card }
    })
  },

  receiveCardList(data){
    AppDispatcher.dispatch({
      type:'RECEIVE_CARD_LIST',
      payload: { data }
    })
  }
}

export default ServerActions;
