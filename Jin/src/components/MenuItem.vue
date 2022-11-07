<script>
export default{
  name:"MenuItem",
  props:[
    "id",
    "name",
    "category",
    "price",
    "image",
    "inStock",
    "veggie",
    "quantity",
    "addToCart",
    "catQuery"
    ],
    data(){
     return{
      itemActive :true,
     }
    },
    computed:{
		  isDisabled: function(){
			  return !this.inStock
		  },
      isCatActive: function(){
        if(this.catQuery == this.category){
          itemActive = false
        }
      }
	},
}
</script>

<template>

  <div class="menu__item" :class="{ active : itemActive }">

    <div class="menu__item_card">

      <div class="menu__item-imgbx">
        <img :src="image.source" :alt="name">
      </div>

      <div class="menu__item-contentbx">

        <h4>{{ name }}</h4>

      

        <div class="menu__item-infos">
          <div class="item-infos">
            <h5>{{ price }} €</h5>
            <span> ({{ quantity }} pieces)</span>
          </div>
          
        </div>

        <button type="button"
            v-if="!inStock">
            En rupture
        </button>

        <button type="button"
            v-else
            @click="addToCart(id, 1, price)"
            :class="{active: inStock}">
            Ajouter au panier
        </button>

      </div>

    </div>

  </div>

</template>

<style>
.menu__item{
  position: relative;
  font-family: 'Playfair';
  display: none;
}

.menu__item.active{
  display: block;
}

.menu__item_card{
  position: relative;
  height: 350px;
  background-color: #232323;
  overflow: hidden;
  box-shadow: 0 25px 22px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.menu__item_card::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #BC002D;
  clip-path: circle(125px at 80% 20%);
  transition: 0.5s ease-in-out;
}

.menu__item_card:hover::before{
  clip-path: circle(300px at 80% -20%);
}

.menu__item_card::after{
  content:"Jin";
  position: absolute;
  top: 30%;
  left: 10%;
  font-size: 12em;
  font-weight: 800;
  font-style: italic;
  color: rgba(255, 255, 255, 0.04);
  text-align: center;
  font-family: 'japon';
  z-index: 0;
  pointer-events: none
}

.menu__item_card .menu__item-imgbx{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  width: 100%;
  height: 100%;
  transition: .5s;
  pointer-events: none
}

.menu__item .menu__item_card:hover .menu__item-imgbx{
  top: 10%;
  transform: translateY(-25%);
}

.menu__item_card .menu__item-imgbx img{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(20deg);
  width: 80%;
}

.menu__item_card .menu__item-contentbx{
  position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 90;
}

.menu__item .menu__item_card:hover .menu__item-contentbx{
  height: 175px;
}

.menu__item-contentbx h4{
  position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
}

.menu__item-contentbx .menu__item-infos{
  align-items: center;
  padding: 8px 40px;
  transition: .5s;
  opacity: 0;
  visibility: hidden;
  color: #fff;
}

.menu__item-infos .item-infos{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.menu__item-contentbx .menu__item-infos h5{
  font-weight: bold;
  margin-right: 10px;
  font-size: 20px;
}

.menu__item .menu__item_card:hover .menu__item-infos{
  opacity: 1;
  visibility: visible;
  transition-delay: .5s;
}

.menu__item button{
  display: inline-block;
  padding: 10px 20px;
  background: #232323;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #fff;
  opacity: 0;
  transform: translateY(50px);
  transition: .5s;
  cursor: pointer;
}

.menu__item button.active{
  background: #fff;
  color: #111;
 
}

.menu__item button.active:hover{
  border: 1px solid #fff;
  color: #fff;
  background: #232323;
}

.menu__item .menu__item_card:hover button{
  opacity: 0.5;
  transform: translateY(0px);
  transition-delay: .7s;
}

.menu__item .menu__item_card:hover button.active{
  opacity: 1;
  transform: translateY(0px);
  transition-delay: .7s;
}

@media (min-width: 768px) { 

  .menu__item{
  display: flex !important;
  justify-content: center;
  }   

  .menu__item_card{ 
    width: 320px;
    height: 450px;
  }

  .menu__item_card::before{
    clip-path: circle(150px at 80% 20%);
  }

  .menu__item_card::after{
  left: 20%;
  }

  
}

</style>