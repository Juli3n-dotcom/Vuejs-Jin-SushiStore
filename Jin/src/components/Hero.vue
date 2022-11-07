<script setup>
defineProps({
  siteName:{
    type:String,
    required: false
  },
})
</script>

<template>

<div class="hero">
  
  <div class="hero__left-part">
    <h1>{{this.siteName}}</h1>
    <span class="ligne"></span>

  </div>

  <div class="hero__right-part">
   <img src="../../public/images/hero2.png" alt="sushi">
  </div>

</div>

</template>

<style>

.hero__left-part{
  position: relative;
  
  background-size: cover;
}
.hero h1{
  text-align: center;
    color: #fff;
    font-family: 'Japon';
    font-size: 8rem;
    line-height: normal;
}

.hero .ligne{
  display: block;
  height: 2px;
  background-color: #BC002D;
  width: 10%;
  margin: -20px auto;
}

.horraires__container {
   display: flex;
   text-align: center;
   margin-top: 2rem;
  }

  .horraires__container ul{
    margin: 0 auto;
  }

  .horraires__container ul li{
    list-style: none;
  }

  .hero__right-part{
    margin-top: 4rem;
    display: flex;
    justify-content: center;
  }

  .hero__right-part img{
  max-width: 50%;
  }
</style>