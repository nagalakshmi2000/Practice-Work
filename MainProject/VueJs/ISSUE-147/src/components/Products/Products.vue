
<template>
    <add-product @sendData="addDataArray"></add-product>
    <products-list :item="products"></products-list>
</template>
<script>
import AddProduct from './AddProduct.vue';
import ProductsList from './ProductsList.vue';
export default {
    data() {
        return {
            products: [{
                productName: 'i phone',
                description: 'An apple mobile which is nothing like apple',
                price: '549',
                image: "https://dummyjson.com/image/i/products/1/1.jpg"
            },
            {
                productName: 'iphone x',
                description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology  A12 Bionic chip', price: '889',
                image: "https://dummyjson.com/image/i/products/8/4.jpg"
            },

            {
                productName: 'i phone',
                description: 'An apple mobile which is nothing like apple',
                price: '549',
                image: "https://dummyjson.com/image/i/products/1/1.jpg"
            },
            {
                productName: 'iphone x',
                description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with LED technology  A12 Bionic chip', price: '889',
                image: "https://dummyjson.com/image/i/products/8/4.jpg"
            }
            ]

        };
    },
    methods: {
        addDataArray(items) {
            this.products.push(items)
        }
    },
    components: {
        AddProduct,
        ProductsList,
    }
};
</script>
<style>

</style>