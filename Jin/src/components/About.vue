<script setup>
import Horraires from './HorrairesComponent.vue';

defineProps({
  time:{
    type:Array,
    required: false
  }
})
</script>

<template>

<div class="about">
  
  <div class="about__left-part">
    <h2>Nos Horraires</h2>
     <div class="horraires__container">
        <ul>
          <li v-for="item in this.time">
            <Horraires 
            :day = "item.day"
            :horraires = "item.horraires"/>
          </li>
        </ul>
      </div>

  </div>

  <div class="about__right-part">
    <div class="about__link-container link__container">
      <RouterLink to="/menu">Notre Carte</RouterLink>
    </div>
  </div>

</div>

</template>

<style>
.about{
  margin-top: 4rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.about h2{
  text-align: center;
  color: #fff;
  font-family: 'PlayFair';
}

.about__left-part{
  margin-bottom: 2rem;
}

.about__right-part{
  position: relative;
  width: 80%;
  height: 500px;
  background-image: url('../../public/images/About.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0 auto;
}

.about__right-part .about__link-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: transparent;
  border: 1px solid #fff;
  padding: 4px 10px;
  border-radius: 4px;
  transition: 0.5s;
  cursor: pointer;
  margin-top: initial;
}

.link__container:hover{
  background: #BC002D;
    border: none;
    color: #fff;
}
.link__container a{
  color: #fff;
}

@media (min-width: 768px) {
  .about{
    flex-direction: row;
    padding: 1rem 4rem;
  }

  .about__right-part{
  width: 50%;
  height: 300px;
 
}

}


@media (min-width: 1024px) { 

  .about{
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
  }

  .about__right-part{
  width: 500px;
  height: 500px;
  margin: initial; 
}
}

</style>