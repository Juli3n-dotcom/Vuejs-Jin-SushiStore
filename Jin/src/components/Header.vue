<script>
import logo from '../assets/logo_2.png';
import ShoppingCart from './ShoppingCart.vue';


export default{
    name:'Header',
    props:['siteName', 'count','sum','menu','removeToShoppingCart','addQuantity','removeQuantity'],
    components:{
      ShoppingCart,
    },
    data(){
      return{
        logo : logo,
        menuIsActive: false,
        cartActive :false,
        }
    },
    methods:{
      openMenu(){
        this.menuIsActive = !this.menuIsActive;
      },
      openCart(){
        this.cartActive = !this.cartActive;
      },     
    },
    computed:{
      currentRouteName() {
        return this.$route.name;
      }
    }
}
</script>

<template>
  <header>
   <div class="heard__left-part">
    <div class="header__menu-container"
        @click="openMenu"
        :class="{active : menuIsActive}">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="header__logo-container">
      <img :src="logo" alt="logo resto" class="logo">
      <RouterLink to="/"><h3>{{this.siteName}}</h3></RouterLink>
    </div>
   </div>

   

   <div class="header__right-part">

    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/menu">Notre Carte</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      </nav>


    <div class="header__cart-container">
      <div class="cart__container"
            @click="openCart"
            :class="{ active : cartActive, active : count > 0 }">
              <font-awesome-icon icon="fa-solid fa-bag-shopping" />
              <span v-if="count > 0">{{this.count}}</span>
        </div> 
    </div>

   </div>

   

  </header>

  <div class="responsive_nav"
        :class="{ active : menuIsActive }">
        <nav>
            <RouterLink to="/" @click="openMenu">Accueil</RouterLink>
            <RouterLink to="/menu" @click="openMenu">Notre Carte</RouterLink>
            <RouterLink to="/contact" @click="openMenu">Contact</RouterLink>
        </nav>
  </div>

  <ShoppingCart
        @openCart="openCart"
        :count = "count"
        :class="{ active : cartActive }"
        :menu ="menu"
        :sum = "sum"
        :addQuantity = "addQuantity"
        :removeQuantity = "removeQuantity"
        :removeToShoppingCart ="removeToShoppingCart"/>

</template>

<style>

header{
  background-color: #212529;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  padding:0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  z-index: 200;
  color: #fff;
}

.heard__left-part{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__menu-container{
  position: relative;
  height: 16px;
  width: 20px;
  transition-duration: 0.5s;
  margin-right: 10px;
  z-index: 200 !important;
}

.header__menu-container span{
  opacity: 1;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  color: black;
  background-color: white;
  position: absolute;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
 
}

.header__menu-container span:first{
  top: 0;
} 
.header__menu-container span:nth-child(2){
  top: 5px;
  width: 75%;
}

.header__menu-container span:last-child{
  top: 10px;
}

.header__menu-container.active span:first-child{
  transform: translateY(10px) rotate(135deg);
}

.header__menu-container.active span:nth-child(2){
  opacity: 0;
  width: 0;
  background-color: transparent;
}

.header__menu-container.active span:last-child{
  transform: translateY(0) rotate(-135deg);
}

/* .header__logo-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
} */

.header__logo-container h3{
  margin-left: 10px;
  font-family: 'japon';
  font-size: 30px;
  color: #fff;
  display: none;
}

.header__logo-container img{
  height: 20px;
  width: 20px;
}

.page__title p{
  font-family: 'japon';
  font-size: 20px;
}

.header__cart-container{
  display: flex;
  justify-content: space-between;
}

.cart__container{
  position: relative;
}

.cart__container.active svg{
  animation: shake 1s forwards;
  -webkit-animation-name: shake;
  -webkit-animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 0s;
}

@keyframes shake {
  10% {
    transform: rotate(15deg);
  }

  20% {
    transform: rotate(-15deg);
  }

  30% {
    transform: rotate(15deg);
  }

  50% {
    transform: rotate(0deg);
  }
}

.cart-icon{
	max-width: 14px;
}
   
.header__cart-container span{
    position: absolute;
    top: -25%;
    right: -70%;
    height: 16px;
    width: 16px;
    color: white;
    font-size: 10px;
    border-radius: 50%;
    background-color: #BC002D;
    text-align: center;
}

.responsive_nav{
  position: fixed;
  top: 50px;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #BC002D;
  z-index: 102;
  padding: 10px 0.5rem;
  transform: translate3d(0,-120%,0);
  transition: transform 0.5s ease-in-out;
  /* overflow: hidden; */
  text-align: center;
}

.responsive_nav.active{
  transform: translate3d(0,0,0);
  visibility: visible;
}

.responsive_nav nav{
  display: flex;
  flex-direction: column;
}

.responsive_nav nav a{
  margin: 10px;
  color:#fff;
}

.header__right-part nav{
  display: none;
}

@media (min-width: 768px) { 

header{
  padding: 0 2rem;
}

.header__menu-container{
  display: none;
  visibility: hidden;
}

.header__logo-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo-container h3{
  display: block;
}

.header__logo-container img{
  height: 30px;
  width: 30px;
}

.page__title{
  display: none;
}

.header__right-part{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__right-part nav{
  display: flex;
}

.header__right-part nav a {
  color: #fff;
  margin-right: 10px;
  font-family: 'Playfair';
}

.header__right-part nav a.router-link-active {
  color: #E44849
}

.header__cart-container{
  margin-left: 10px;
}

} 

@media (min-width: 1024px) { 

header{
  padding: 0 4rem;
}
}

</style>