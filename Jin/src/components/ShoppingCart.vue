<script>
import CartItem from '../components/CartItem.vue';

export default{
    name: 'ShoppingCart',
    props :['menu','openCart', 'cartActive','count','sum','removeToShoppingCart','addQuantity','removeQuantity'],
    components:{
        CartItem,
    },
    data(){
        return{
            get cart(){
                return JSON.parse(localStorage.getItem("cart"))
            },
            set cart(value) {
                localStorage.setItem("cart", JSON.stringify(this.cart));
            }
        }
    },
    methods:{
        getData(id){
            return this.menu.find(item => item.id === id);
        },
    },
   
}
</script>

<template>
  <div class="cart">
       <div class="close">
          <font-awesome-icon icon="fa-solid fa-xmark"
              @click="$emit('openCart')"
              :class="{ active : cartActive }"/>
       </div>

       <div>
          <h2>Votre Panier</h2>
          <div class="table__cart-container" v-if="count > 0">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Produit</th>
                  <th>Quantité</th>
                  <th>PU</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
         
              <tbody>
                <CartItem v-for="(item, index) in cart" 
                  :id="item.id"
                  :index = "index"
                  :data = "getData(item.id)"
                  :quantity = "item.quantity"
                  :addQuantity = "addQuantity"
                  :removeQuantity = "removeQuantity"
                  :removeToShoppingCart ="removeToShoppingCart"/>
                  <tr class="total__container">
                    <td class="total"><h4>TOTAL</h4></td>
                    <td> </td>
                    <td class="total__count">{{this.count}}</td>
                    <td class="total__price">{{this.sum}} €</td>
                    <td></td>
                    <td> </td>
                  </tr>
              </tbody>

            </table>
          </div>

          <div class="empty__cart" v-else>
            <h4>Votre panier est vide</h4>
          </div>

       </div>

  </div>
</template>

<style>

.table__cart-container{
  margin-top: 2rem;
}

table{
  width: 100%;
}
.cart{
  position: fixed;
  top: 0;
  right: 0;
  background-color: #232323;
  width: 90%;
  height: 100vh;
  z-index: 999;
  padding: 2rem 0.5rem;
  color: #fff;
  transform: translate3d(100%,0,0);
  transition: transform 0.5s ease-in-out;
  /* overflow: hidden; */
  text-align: center;
  box-shadow: 0px 0px 8px rgba(0,0,0,.6);
  }

  .cart.active{
      transform: translate3d(0,0,0);
  }

  .close{
  height: 30px;
  width: 30px;
  display: block;
  position: absolute;
  right: 20px;
  top: 24px;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
  }

  .cart h2{
      margin-top: 2rem;
  }

  
.empty__cart{
    height: 400px;
    width: 100%;
    position: relative;
}
.empty__cart h4{
margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.total__container{
    height: 40px;
}

.total__container td{
    border-top: 1px solid #fff;
}

.total__container .total{
    font-size: 16px;
    font-weight: bold;
}

.total__container .total__count,
.total__container .total__price
{
    font-size: 16px;
    font-weight: bold;
}


@media (min-width: 768px) { 
  .cart{
      width: 30%;
  }
}
</style>