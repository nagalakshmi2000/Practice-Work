<template>
  <div class="text-center my-5 fs-3">Items Data</div>
  <div>
    <form class="col-md-4" >
      <div>
        <label class="form-label">Item Name</label>
        <input type="text" class="form-control" v-model="itemName">
      </div>
      <div class="itemsError mb-3">
        {{ ItemError.itemName }}
      </div>
      <div class="mb-3">
        <label class="form-label">Image To Upload</label>
        <input type="file" id="myFile" class="form-control" name="filename">
        <div class="itemsError">{{ ItemError.image }}</div>
      </div>
      <div class="d-flex justify-content-between col-md-12 gap-5">
        <div>
          <label class="form-label">MRP</label>
          <input type="text" class="form-control" v-model="mrp">
          <div class="itemsError">
            {{ ItemError.mrp }}
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Selling Price</label>
          <input type="text" class="form-control" v-model="sellingPrice">
          <div class="itemsError">{{ ItemError.sellingPrice }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Quantity</label>
          <input type="text" class="form-control" v-model="quantity">
          <div class="itemsError">{{ ItemError.quantity }}</div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="onItemSubmit()">Submit</button>
    </form>
  </div>
</template>
<script>
import ItemValidations from '../services/ItemValidations';
import axios from 'axios';
import emitter from 'tiny-emitter/instance';
export default {
  data() {
    return {
      itemName: '',
      mrp: '',
      sellingPrice: '',
      quantity: '',
      image: null,
      ItemError: [],
    }
  },
   methods: {
    resetData(){
      this.itemName = '';
      this.mrp='';
      this.sellingPrice='';
      this.quantity='';
    },
    onFilePicked() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    onItemSubmit() {
      // console.log("emitted");
      emitter.emit('customerDetails',true);
      let ProductValidations = new ItemValidations(
        this.itemName,
        this.mrp,
        this.sellingPrice,
        this.quantity,
        this.image,
      )
      this.ItemError = ProductValidations.checkItemValidations();
      // console.log(this.ItemError);
      if (Object.keys(this.ItemError).length) {
        return false
      }
      axios.post(`https://invoice-generator-4d148-default-rtdb.firebaseio.com/ItemData.json`, {
        ItemName: this.itemName,
        MRP: this.mrp,
        sellingPrice: this.sellingPrice,
        Quantity: this.quantity,
        image: this.image
      })
      .then((res)=>{
        this.resetData()
        emitter.emit('itemDetails',true);
      })
    }
  },
 
}
</script>

<style scoped>
.col-md-4 {
  margin-left: auto;
  margin-right: auto;
}
.itemsError {
  color: red;
}
</style>