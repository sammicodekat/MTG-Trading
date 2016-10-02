const Storage ={
  read(key){
    const serializedData = localStorage[key];
    try{
      let savedState = JSON.parse(serializedData);
      return savedState;
    } catch(err){
      return null;
    }
  },
  write(key,data){
    const serializedData = JSON.stringify(data);
    localStorage[key] = serializedData;
  }
}
export default Storage;
