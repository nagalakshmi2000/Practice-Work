<template>

  <div class="container mt-5">
    <div class="col-md-7 ms-5 bg-light">
      <div v-for="(data) in addCartArray" class="mt-2 pt-3">
        <div class="col d-flex">
          <div class="col-md-4 embed-responsive embed-responsive-16by9 ">
            <div class="image-fluid image-thumbnail ms-5">
              <img :src=data.imageUrl alt="">
            </div>
            <div class="mt-4 d-flex justify-content-center">
              <button class="border border-1 rounded-circle ms-2 px-3" @click.prevent="decrement(data.id)">
                <h4>-</h4>
              </button>
              <input  :value="data.count" class="ms-3 ps-4 col-md-3 border border-1" />
              <button @click.prevent="increment(data.id)" class="border border-1 ms-3 px-3 rounded-circle">
                <h4>+</h4>
              </button>
            </div>
          </div>
          <div class="col-md-7 space">
            <div class="card-block ">
              <h6 class="card-title fs-5 fw-normal">
                {{ data.name }}
              </h6>
              <p class="mb-0 fs-5 fw-bold">
                ₹:{{ data.Price }} </p>
              <p class="mt-3">Quantity:{{ data.count }}</p>
              <p>Total:₹{{ data.Price * data.count }}
               </p>
            </div>
            <span class="text-right fs-5 fw-normal colorChange" @click.prevent="deleteItem(data.id)">Remove</span>
            <span class="ms-3 fs-5 fw-normal colorChange" @click.prevent="saveItem()">Save for later</span>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-12">
          <hr />
        </div>

      </div>
      <div class="d-grid gap-2 d-md-flex">
        <button class="btn mb-3 me-4  py-3 fs-6 fw-bolder" type="button" @click.prevent="paymentData()">PLACE ORDER</button>
      </div>
    
    </div>
    <!-- </div> -->
  </div>
  

</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      addCartArray: [],
      decrementArray: [],
      cartArray: [],
      count:1,
    }
  },
  methods: {

    increment(id) {
      // debugger

      console.log(id);
      console.log(this.addCartArray);
      let result = this.addCartArray.find((data) => {
        console.log(data.id);
        if (data.id == id) {
          // console.log(data.count)
          data.count = isNaN(data.count)?0:data.count;
          this.count++;
          // console.log(a)
          return data.count=data.count+1
        }
      });
      
    },
    decrement(id) {
      console.log(id);
      console.log(this.addCartArray);
      let result = this.addCartArray.find((data) => {
        console.log(data);
        if (data.id == id && data.count>=2) {
          console.log(data.count)
          data.count = isNaN(data.count)?1:data.count;
          this.count--;
          // console.log(a)
          return data.count=data.count-1
        }       
      });
      
    },
    paymentData() {
      this.$router.push(`/payment`);
    },
    saveItem() {
      this.$router.push(`/saveForLater`);
    },
    getCategoryData() {
      axios.get(`https://vue-posts-af023-default-rtdb.firebaseio.com/AddCart.json`).then((response) => {
        let data = response.data;
        console.log(response.data);
        for (let key in data) {
          // console.log(key)
          this.addCartArray.push({ ...data[key], id: key })
        }
        console.log(this.addCartArray)
      })
    },
    deleteItem(id) {
      console.log(id);
      axios.delete(`https://vue-posts-af023-default-rtdb.firebaseio.com/AddCart/${id}.json`).then((response) => {
        console.log(response.data);
        this.getCategoryData()
        this.addCartArray = [];
      });
    },
  },
  mounted() {
    this.getCategoryData()
  },

}

</script>

<style scoped>
img {
  margin-left: 15px;
  width: 100px;
  height: 125px;
  object-fit: fit;
}
.colorChange:hover{
  color: blue;
}
.fs-5 {
  color: #212121;
}
.d-md-flex{
  justify-content: flex-end;
}
.space {
  margin-left: 2em;
}
.btn{
  background-color: #fb641b;
  color:rgb(249, 243, 243);
  padding-left: 4em;
  padding-right: 4em;
}
.rounded-circle {
  border-radius: 50%;
}
</style>