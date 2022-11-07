<script>
import MenuItemCat from '../components/MenuItemCat.vue';
import MenuItem from '../components/MenuItem.vue';
import console from 'console';


export default{
  name: 'MenuView',
  props:[
    'cart',
    'addToCart',
    'menu'
  ],
  components:{
    MenuItemCat,
    MenuItem,
  },
  data(){
    return{
      catQuery :"",
      catActive :[]

    }
  },
  computed:{
    createCat(){
       const formattedCat = this.menu.reduce((itemCat, { category }) => {
         if (!itemCat[category]) {
            itemCat[category] =  category ;
         }
          return itemCat;
        }, {});
      return formattedCat
    },
  },
  methods:{
    showCat(cat){
      this.catQuery = cat

      if(this.catActive.some(item => item.cat == cat)){

      const isThisCat = (element) => element == cat;
      const index = this.catActive.findIndex(isThisCat)
       this.catActive.splice(index)
       localStorage.setItem("category", JSON.stringify(this.catActive));

      }else{

        let catActiveItem = {
        cat :cat
        }

      this.catActive.push(catActiveItem)
      localStorage.setItem("category", JSON.stringify(this.catActive));

    }

      // return cat

    }
  }
}
</script>

<template>
    <div class="menu">
      <h1>Carte</h1>

      <div class="container">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Possimus perspiciatis, sed ipsam illum vel voluptate consequatur 
          labore deleniti quis deserunt officiis commodi qui quas ad eum iusto sapiente 
          totam porro?
        </p>

       <!-- <div class="cat__item-container">
        <ul>
          <li v-for="(index, cat) in createCat" class="cat__item">
            <MenuItemCat
            @click = "showCat(cat)"
            :cat = "cat"
            :key = "index"
            />
          </li>
        </ul>
       </div> -->

        <div class="menu__item-container">
            <MenuItem v-for="(item, index) in menu"
              :key = "item.id"
              :id = "item.id"
              :name = "item.name"
              :category = "item.category"
              :price = "item.price"
              :image = "item.image"
              :inStock = "item.inStock"
              :veggie = "item.veggie"
              :quantity = "item.quantity"
              :addToCart= "addToCart"
              :catQuery = "catQuery"
            />
        </div>
      </div>

    </div>
  </template>
  
  <style>

  .menu{
    padding: 1rem;
  }

  .menu h1{
    text-align: center;
    color: #fff;
    font-family: 'Japon';
    font-size: 3rem;
  }

  .menu p{
  color: #fff;
  margin-top: 10px;
  font-family: 'Playfair';
  padding: 10px;
  }

  .menu__item-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-top: 2rem;
  }


  .cat__item-container ul{
    margin: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .cat__item {
    list-style: none;
    margin: 0 10px;
  }
  

  @media (min-width: 1024px) {
    .menu {
      min-height: 100vh;

      align-items: center;
      padding: 1rem 14rem;
    }
  }

  @media (min-width: 1200px) {
    .menu__item-container{
    grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1399px) {
    .menu__item-container{
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 4rem;
    }
  }


  </style>
  