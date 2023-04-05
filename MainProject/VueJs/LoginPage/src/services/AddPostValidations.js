import Validations from "./Validations";
export default class AddPostValidations{
  constructor(Price,description,title,categoryId,imageUrl) {
    this.Price = Price;
    this.description =description;
    this.title = title;
    this.categoryId=categoryId
    this.imageUrl=imageUrl
  }
  checkValidations() {
    let PostErrors = [];
    if (!Validations.checkPrice(this.Price)) {
      PostErrors['Price'] = 'Enter valid Price'
    }
    if (!Validations.checkDescription(this.description)) {
      PostErrors['description'] = 'Enter valid Description'
    }
    if (!Validations.checkTitle(this.title)) {
      PostErrors['title'] = ' Enter valid title'
    }
    if (!Validations.checkCategory(this.categoryId)) {
      PostErrors['categoryId'] = ' Enter valid category'
    }
    if (!Validations.checkImage(this.imageUrl)) {
      PostErrors['imageUrl'] = ' Enter valid imageUrl'
    }
    return PostErrors;
    
  } 
}