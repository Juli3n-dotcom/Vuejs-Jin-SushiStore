<script setup>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Delivery from '../components/Delivery.vue';

defineProps({
  siteName:{
    type:String,
    required: false
  },
  time:{
    type:Array,
    required: false
  }
})
</script>

<template>
  <div class="home__container">

    <div class="hero__container">
      <Hero  
        :siteName = "siteName"/>
    </div>

    <div class="about__container">
      <About
      :time = "time"/>
    </div>

    <div class="delivery__container">
      <Delivery/>
    </div>

  </div>
</template>

<style>
.home__container{
  padding-bottom: 6rem;
}


</style>
