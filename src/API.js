import {get} from 'axios'
import ServerActions from './actions/ServerActions'

const API ={
  searchCard(query){
    get(`https://api.magicthegathering.io/v1/cards?name=${query}`)
    .then(res => {
      let { data } = res;
      ServerActions.receiveCards(data);
    })
    .catch(console.error)
  },
  searchDetail(id){
    get(`https://api.magicthegathering.io/v1/cards/${id}`)
    .then(res => {
      let { data } = res;
      ServerActions.receiveDetail(data);
    })
    .catch(console.error)
  }
}

export default API;
