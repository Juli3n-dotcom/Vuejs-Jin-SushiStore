<script setup>
</script>

<template>

<h2>Pas besoin de vous deplacer</h2>

<div class="delivery">
  <div class="delivery__left-part">

  </div>

  <div class="delivery__right-part">
    <h4>On vous livre a domicile</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Possimus perspiciatis, sed ipsam illum vel voluptate consequatur 
          labore deleniti quis deserunt officiis commodi qui quas ad eum iusto sapiente 
          totam porro?
    </p>
    <div class="link__container">
      <RouterLink to="/menu">Notre Carte</RouterLink>
    </div>
  </div>

</div>

</template>

<style>
.delivery{
 
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
}

h2{
  text-align: center;
  color: #fff;
  font-family: 'PlayFair';
  margin-bottom: 2rem;
}

.delivery__left-part{
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url('../../public/images/delivery2.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: -50px;
  margin: 0 auto;
}

.link__container{
  max-width: 110px;
  background: transparent;
  border: 1px solid #fff;
  padding: 4px 10px;
  border-radius: 4px;
  transition: 0.5s;
  cursor: pointer;
  font-family: initial;
  text-align: center;
  text-align: center;
  margin-top: 1rem;
}

.link__container:hover{
  background: #BC002D;
    border: none;
    color: #fff;
}
.link__container a{
  color: #fff;
}

.delivery__right-part{
  color: #fff;
  font-family: 'Playfair';
  max-width: 250px;
  position: absolute;
  bottom: -6rem;
  right: 2rem;
}

.delivery__right-part h4{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {

  .delivery__left-part{
    height: 600px;
    background-position-x: -10rem;
  }
  .delivery__right-part{
    max-width: 500px;
    bottom: 3rem;
  }
}


@media (min-width: 1024px) { 


.delivery{
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 4rem;
}

.delivery__left-part{
    height: 600px;
    background-position-x: 0;
    width: 40%;
  }

.delivery__right-part{
width: 500px;
bottom: 6rem;
right: 10rem;
}
}

</style>