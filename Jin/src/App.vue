<script>
import { RouterView } from 'vue-router';
import menu from './data/menu.json';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default{
  components:{
    RouterView,
    Header,
    Footer,
},
  data(){
    return{
      siteName: 'Jin',
      adress:'91080 Courcouronnes',
      phone:'07.09.10.11.12',
      mail:'contact@jin.fr',
      time: [
        {
          day: 'Lundi',
          horraires:{
            midi: 'fermé',
            soir: ' 19:30 / 23:30'
          }
        },
        {
          day: 'Mardi au samedi',
          horraires:{
            midi: '11:30 / 14:30',
            soir: ' 19:30 / 23:30'
          }
        },
        {
          day: 'Dimanche',
          horraires:{
            midi: 'fermé',
            soir: ' 19:30 /22:30'
          }
        },
      ],
      menu: menu,
      cart:[],
      count: 0,
      sum:0,
      cartActive :false
    }
  },
  mounted: function(){
   if(localStorage.getItem("cart")){
      this.cart = JSON.parse(localStorage.getItem("cart"));

      if(this.count >= 0){
        for(var item in this.cart){
          this.count += this.cart[item].quantity
          this.sum += (this.cart[item].price * this.cart[item].quantity)
        }
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
   }
  },
  methods:{
    addToCart(id, quantity, price){
      this.count += quantity
      this.sum += (quantity * price)

      if (localStorage.getItem("cart")) {
        this.cart = JSON.parse(localStorage.getItem("cart"));
      }

      if(this.cart.some(item => item.id == id)){
       
         this.cart.find(item => item.id == id).quantity++
       
      }else{

        let cartItem = {
          id: id,
          quantity: quantity,
          price: price
        }

        this.cart.push(cartItem)
      }

    localStorage.setItem("cart", JSON.stringify(this.cart));

    },
    removeToShoppingCart(index, quantity, price){
      this.count -= quantity
      this.sum -=(price * quantity)
      this.cart.splice(index,1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addQuantity(id, price){
      this.count++
      this.sum += price
      this.cart.find(item => item.id == id).quantity++
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    removeQuantity(id, index, price){
      this.count--
      this.sum -= price
      this.cart.find(item => item.id == id).quantity--
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }, 
  
}

</script>


<template>
  <Header
    :siteName = "this.siteName"
    :count = "count"
    :sum = "sum"
    :menu = "this.menu"
    :addQuantity = "addQuantity"
    :removeQuantity = "removeQuantity"
    :removeToShoppingCart = "removeToShoppingCart"
  /> 


  <main>
    <RouterView
    v-slot="Component"
    :siteName = "siteName"
    :time = "time"
    :menu = "menu"
    :adress = "adress"
    :phone = "phone"
    :mail = "mail"
    :addToCart = "addToCart"/>
 </main>

 <Footer 
  :siteName = "siteName"
  :time = "time"
  />
  
</template>

<style scoped>
main{
  /* padding: 1rem; */
  padding-top: 4rem;
  margin-bottom: 4rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
