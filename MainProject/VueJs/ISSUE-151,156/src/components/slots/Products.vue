<template>
  <h2 class="text-center text-secondary">Products Data </h2>
  <div class="d-flex flex-wrap justify-content-between">
    <single-product v-for="Product in Products"
     :key="Product.title" :Product="Product"  >
    </single-product>
  </div>
  </template>
  
  <script>
  import SingleProduct from './SingleProduct.vue';
  export default{
    
    props:['name'],
  data()
 
  {
    return{
      Products: [
        {
            
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            images: [
                "https://dummyjson.com/image/i/products/1/1.jpg",
                "https://dummyjson.com/image/i/products/1/2.jpg",
                "https://dummyjson.com/image/i/products/1/3.jpg",
                "https://dummyjson.com/image/i/products/1/4.jpg", 
                "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
            ]
        },
        {
            
            title: "iPhone X",
            description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
            images: [
                "https://dummyjson.com/image/i/products/2/1.jpg",
                "https://dummyjson.com/image/i/products/2/2.jpg",
                "https://dummyjson.com/image/i/products/2/3.jpg",
                "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
            ]
        },
        {
            
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
            "images": [
                "https://dummyjson.com/image/i/products/3/1.jpg"
            ]
        },
        {
            
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
            "images": [
                "https://dummyjson.com/image/i/products/4/1.jpg",
                "https://dummyjson.com/image/i/products/4/2.jpg",
                "https://dummyjson.com/image/i/products/4/3.jpg",
                "https://dummyjson.com/image/i/products/4/4.jpg",
                "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
            ]
        },
        {
            
            "title": "Huawei P30",
            "description": "Huawei’s day in Germany and now the device has made its way to the UK.",
            "price": 499,
            "thumbnail": "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
            "images": [
                "https://dummyjson.com/image/i/products/5/1.jpg",
                "https://dummyjson.com/image/i/products/5/2.jpg",
                "https://dummyjson.com/image/i/products/5/3.jpg"
            ]
        },
    ]

    
  }
 },
 components:{
  SingleProduct
 }
   };
  </script>

  
  <style>


  </style>

