<script>

export default{
    name:"CartItem",
    props: ["id","quantity","data","index","menu","removeToShoppingCart","addQuantity","removeQuantity"],
    data(){
		return{
			// count: this.quantity,
      cart: JSON.parse(localStorage.getItem("cart")),
		}
	},
	computed:{
		isDisabled: function(){
			return !this.data.inStock
		},

  },
}
</script>

<template>
  <tr class="cart_item">
    <td class="image__container"><img :src="this.data.image.source" :alt="this.data.image.alt"></td>
    <td class="cart_item-title">{{this.data.name}}</td>
    <td>
      <div class="cart__counter">
        <div class="cart__inline-group">
          <div class="input-group-prepend">

    				<button 
							type="button"
							class="btn btn-outline-secondary btn-minus" 
							@click="removeQuantity(this.id, this.index, this.data.price)"
							:class="{active: this.data.inStock}"
							:disabled="isDisabled">
								<font-awesome-icon icon="fa-solid fa-minus" />
    					</button>
  					</div>

            <input 
              class="form-control quantity"
							id="add-item-quantity"
							name="quantity" 
							v-model.number="this.quantity" 
							type="number">

            <div class="input-group-append">
  						<button 
							  type="button"
							  class="btn btn-outline-secondary btn-plus" 
								@click="addQuantity(this.id, this.data.price)"
								:class="{active: this.data.inStock}"
								:disabled="isDisabled">
								    <font-awesome-icon icon="fa-solid fa-plus" />   
							</button>
 						</div>

        </div>
      </div>
    </td>
    <td class="cart__price"> {{this.data.price}} €</td>
    <td>
      <button 
        type="button"
        class="cart__remove"
        @click="removeToShoppingCart(this.index, this.quantity, this.data.price)">
          <font-awesome-icon icon="fa-solid fa-trash" />
      </button>
    </td>
  </tr>
   
</template>

<style>

td{
  width: 25%;
}



.image__container{
    width: 20%;
}

.image__container img{
    width: 75%;
    height: 25%;
    text-align: center;
}

.cart__about{
    height: 100%;
    text-align: start;
    font-size: 10px;
}

.cart__about .cart_item-title{
 line-height: 10px;
 color: #fff;
}

.cart__inline-group {
  max-width: 9rem;
  padding: .5rem;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
}

.cart__inline-group .form-control {
  text-align: center;
  border: none;

}

.form-control[type="number"]::-webkit-inner-spin-button,
.form-control[type="number"]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

.cart_item input{
	max-width: 25px;
	text-align: center;
  background: transparent;
  color: #fff;
  font-weight: bold;
}

.cart_item button{
	background-color: #eee;
	color: gray;
	border: none;
	height: 16px;
  width: 16px;
  font-size: 8px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart_item button.active{
  background: transparent;
	color: white;
	border: 1px solid #fff;
}


.cart__price{
 font-size: 12px;
 font-weight: 800;
 color: #fff;
}

button.cart__remove{
  border: none;
 font-size: 14px;
 font-weight: 600;
 color: #E44C4C;
 cursor: pointer;
 background:none;
 margin: 0 auto;
}

.cart__items-container:first-child{
  padding-top: 10px;
  border-top: 1px solid #eee;
}

.cart__items-container:last-child{
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
</style>