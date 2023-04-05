import Validations from "./Validations";
export default class CustomerValidations{
  constructor(customerName,email,streetAddress,country,city,zipCode,time,date){
    this.customerName =customerName;
    this.email=email;
    this.streetAddress=streetAddress;
    this.country=country;
    this.city=city;
    this.zipCode=zipCode;
    this.time=time;
    this.date=date;
  }
  checkValidations() {
    let CustomerError =[];
    if (!Validations.checkCustomerName(this.customerName)) {
      CustomerError['customerName'] = 'Enter valid customerName'
    }
    if (!Validations.checkEmail(this.email)) {
      CustomerError['email'] = 'Enter valid email'
    }   
    if (!Validations.checkAddress(this.streetAddress)) {
      CustomerError['streetAddress'] = 'Enter valid streetAddress'
    }  
    if (!Validations.checkCountry(this.country)) {
      CustomerError['country'] = 'Invalid'
    }
    if (!Validations.checkCity(this.city)) {
      CustomerError['city'] = 'Invalid'
    }
    if (!Validations.checkZipCode(this.zipCode)) {
      CustomerError['zipCode'] = 'Invalid'
    }
    // if (!Validations.checkTime(this.time)) {
    //   CustomerError['time'] = 'Invalid'
    // }
    // if (!Validations.checkDate(this.date)) {
    //   CustomerError['date'] = 'Invalid'
    // }
    return CustomerError;
  }
} 