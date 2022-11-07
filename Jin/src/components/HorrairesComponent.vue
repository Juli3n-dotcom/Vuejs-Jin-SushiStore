<script>
export default{
  name:'HorraireComponent',
  props:['day','horraires'],
  
}
</script>

<template>
  <div class="time__container">
    <div class="day">
      {{day}} :
    </div>
    <div class="horraires">
      <span>midi : {{horraires.midi}}</span>
      <span> - </span>
      <span>soir : {{horraires.soir}}</span>
    </div>
  </div>
</template>

<style>
.time__container{
  color: #fff;
  font-family: 'Playfair';
  flex-wrap: wrap;
  text-align: center;
  margin: 1rem 0;
}

.time__container .day{
  margin-right: 10px;
  font-weight: bold;
  text-align: start;
}

.horraires{
  display: flex;
  justify-content: space-between;
}

</style>