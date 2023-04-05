export default class Validations {
  static checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
  static minLength(name, minLength) {
    if (name.length < minLength) {
      return false;
    }
    return true;
  }
  static checkPrice(Price){
    if(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/.test(Price)){
      return true;
    }
    return false;
  }
  static checkDescription(description){
    if ( /^(.|\s)*[a-zA-Z]+(.|\s)*$/.test( description ) ) {
      return true;
  }
  return false;
}
static checkTitle(title){
  if ( /^(?![ -.&,_'":?!])(?!.*[- &_'":]$)(?!.*[-.#@&,:?!]{2})[a-zA-Z0-9- .#@&,_'"():.?!]+$/.test( title ) ) {
    return true;
}
return false;
}
static checkCategory(categoryId){
  if ( /^(.|\s)*[a-zA-Z]+(.|\s)*$/.test( categoryId ) ) {
    return true;
}
return false;
}
static checkImage(imageUrl){
  if ( /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test( imageUrl ) ) {
    return true;
}
return false;
}
}