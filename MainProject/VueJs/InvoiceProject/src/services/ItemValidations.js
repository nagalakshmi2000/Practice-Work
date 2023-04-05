import Validations from "./Validations";
export default class ItemValidations{
  constructor(itemName,mrp,sellingPrice,quantity,image){
    this.itemName=itemName,
    this.mrp=mrp,
    this.sellingPrice=sellingPrice,
    this.quantity=quantity,
    this.image=image
  }
  checkItemValidations(){
    let ItemError = [];
    if(!Validations.checkItemName(this.itemName)){
      ItemError['itemName']='Invalid Item Name'
    }
    if(!Validations.checkMrp(this.mrp)){
      ItemError['mrp']='Invalid MRP'
    }
    if(!Validations.checkSellingPrice(this.sellingPrice)){
      ItemError['sellingPrice']='Invalid'
    }
    if(!Validations.checkQuantity(this.quantity)){
      ItemError['quantity']='Invalid'
    } 
    return ItemError;
  
  }
};
