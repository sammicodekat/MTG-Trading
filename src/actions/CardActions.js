import API from '../API'


const CardActions ={
  searchCard(query) {
    API.searchCard(query);
  },
  searchDetail(id) {
    API.searchDetail(id);
  }
}

export default CardActions;
