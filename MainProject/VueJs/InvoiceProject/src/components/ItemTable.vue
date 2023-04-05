<template>
  <div>
    <table class="table table-bordered">
      <thead class="text-center">
        <tr>
          <th>ItemName</th>
          <th>MRP</th>
          <th>Selling Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(itemsData) in itemArray" class="text-center">
          <td><input type="number">{{ itemsData.ItemName }}</td>
          <td>{{ itemsData.MRP }}</td>
          <td>{{ itemsData.sellingPrice }}</td>
          <td>{{ itemsData.Quantity }}</td>
          <td><button class="btn btn-primary" @click.prevent="onDelete(itemsData.id)">Delete</button></td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="float-end me-2">
              <p>Total:</p>
              <p>Discount(10%):</p>
              <p>CGST+SGST(5%+5%):</p>
              <p>Grand Total:</p>
            </div>
          </td>
          <td colspan="2">
           <div class="ms-2">
            <p>₹ {{total}}</p>
            <p>₹ {{(total*0.1).toFixed(2)}}</p>
            <p>₹ {{(total*0.1).toFixed(2)}}</p>
            <p>₹ {{total}}</p>
           </div>
          </td>
        </tr>
      </tbody>
    </table> 
  </div>
</template>
<script>
import axios from 'axios';
import emitter from 'tiny-emitter/instance';
export default {
  data() {
    return {
      itemArray: [],
      editedData: '',
      randomInvoiceNumber: 0,
    }
  },
 computed:{
    total() {
      return this.itemArray.reduce( (acc, itemArray) => acc + itemArray.sellingPrice * itemArray.Quantity,0)
    }
  },
  mounted() {
    this.getData();
    emitter.on('itemDetails', (e) => {
      this.getData()
    })
  },
  methods: {
    getData() {
      this.itemArray = [];
      // console.log(this.itemArray);
      axios.get(`https://invoice-generator-4d148-default-rtdb.firebaseio.com/ItemData.json`).then((response) => {
        console.log(response.data);
        let itemData = response.data;
        if (itemData == null) {
          this.itemArray = []
        }
        for (let key in itemData) {
          this.itemArray.push({ ...itemData[key], id: key });
          console.log(key)
        }
      })
    },
    onDelete(id) {
      console.log(id);
      axios.delete(`https://invoice-generator-4d148-default-rtdb.firebaseio.com/ItemData/${id}.json`).then((response) => {
        console.log(response);
        this.getData();
      })
    }
  }
};
</script>
<style scoped>
.table {
  margin-top: 3em;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(57, 47, 47);
}

</style>