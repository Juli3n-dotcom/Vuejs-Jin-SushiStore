<script>
import Horraires from './HorrairesComponent.vue';
export default{
    name:'Footer',
    props: ['siteName', 'time'],
    components:{
      Horraires
    },
    computed:{
      copyright() {
		    const currentYear = new Date().getFullYear()
		    return this.siteName + '  ' + currentYear
	    }
  }
}
</script>

<template>

    <footer class="footer">

      <div class="horraires__container">
        <ul>
          <li v-for="item in time">
            <Horraires 
            :day = "item.day"
            :horraires = "item.horraires"/>
          </li>
        </ul>
      </div>

        <div class="copyright__container">
            <p>{{ copyright }}</p>
        </div>

      </footer>

</template>

<style>
  .footer{
    margin-top: 4rem;
    width: 100%;
  }

  .horraires__container {
   display: flex;
   text-align: center;
  }

  .horraires__container ul{
    margin: 0 auto;
  }

  .horraires__container ul li{
    list-style: none;
  }

  .copyright__container{
    padding-bottom: 1rem;
    border-bottom: 10px solid #BC002D;
  }

 .copyright__container p{
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-family: 'Playfair';
    margin-top: 1rem;
 }
</style>