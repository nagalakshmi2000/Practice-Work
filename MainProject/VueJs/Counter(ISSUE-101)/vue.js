
let app = Vue.createApp({
    data(){
        return{
            count:0,
            show:Bollean=false,
        }
    },
    methods:{
        countDecrement(){
            this.show= true;
            if (this.count>0) {
                this.count--;
            }
        },
        countIncrement(){
            this.show= true;
            this.count++;
          

        },
    }
})
app.mount('#app')


