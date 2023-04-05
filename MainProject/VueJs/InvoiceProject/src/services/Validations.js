export default class Validations {
  static checkCustomerName(customerName) {
    if (/^[a-zA-Z ]{2,30}$/.test(customerName)) {
      return true;
    }
    return false;
  }
  static checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
  static checkAddress(streetAddress) {
    if (/^[a-zA-Z0-9\s\,\''\-]*$/.test(streetAddress) && streetAddress != '') {
      return true;
    }
    return false;
  }
  static checkCountry(country) {
    if (/[a-zA-Z]{2,20}/.test(country)) {
      return true;
    }
    return false;
  }
  static checkCity(city) {
    if (/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(city) && city != '') {
      return true;
    }
    return false;
  }
  static checkZipCode(zipCode) {
    if (/^\d{6}(?:[-\s]\d{4})?$/.test(zipCode)) {
      return true;
    }
    return false;
  }
  // static checkTime(time){
  //   if(/^(0?[1-9]|1[012]):[0-5][0-9]$/.test(time)){
  //     return true;
  //   }
  //   return false;
  // }
  // static checkDate(date){
  //   if(/^\d{2}([./-])\d{2}\1\d{4}$/.test(date)){
  //     return true;
  //   }
  //   return false;
  // }
  static checkItemName(itemName) {
    if (/^[a-zA-Z ]{2,30}$/.test(itemName)) {
      return true;
    }
    return false;
  }
  static checkMrp(mrp) {
    if (!/^\w*?\s*?\w*?\s*?\w*?\s*?\w*?\s*?\w*?\s*?\w*$/.test(mrp)) {
      return true;
    }
    return false;
  }
  static checkSellingPrice(sellingPrice){
    if(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)\d\d)?$/.test(sellingPrice)){
      return true;
    }
    return false;
  }
  static checkMrp(mrp){
    if(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/.test(mrp)){
      return true;
    }
    return false;
  }
  static checkQuantity(quantity){
    if(/^[0-9]*\d$/.test(quantity)){
      return true;
    }
    return false;
  }
}