<script>
export default{
    name:"MenuItemCat",
    props:[
    "cat",
    "index"
    ],
    data(){
      return{
        catItemActive :false,
      }
    },
    methods:{
      activeCat(){
        this.catItemActive = !this.catItemActive;
      },
      selectCat(cat){
        this.$emit('get-cat', cat);
      }
    }
}
</script>

<template>
    <button 
      type="button"
      :id="index"
      @click="activeCat(); selectCat(this.cat)"
      :class="{active : catItemActive}"> 
        {{cat}}
    </button>
</template>

<style>

.cat__item button{
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 4px 10px;
    border-radius: 4px;
    transition: 0.5s;
    cursor: pointer;
  }

.cat__item button.active{
    background: #BC002D;
    border: none;
    color: #fff;
  }

.cat__item button:hover{
    background: #BC002D;
    border: none;
    color: #fff;
}
</style>