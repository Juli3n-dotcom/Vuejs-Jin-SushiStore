<script>
import contactForm from '../components/Contactform.vue';

export default{
  name:"ContactView",
  props:['adress','phone','mail'],
  components:{
    contactForm,
  }
}
</script>

<template>
    <div class="contact">
        <h1>Contactez nous</h1>
        <div class="container">

          <div class="contact__left-part">

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Possimus perspiciatis.
          </p>

          <ul>
            <li>
              <font-awesome-icon icon="fa-solid fa-map-location-dot" />
              <span>{{adress}}</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-phone" />
              <a href="tel:+33762765434">{{phone}}</a>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-envelope" />
              <a href="mailto:contact@julien-quentier.fr?subject=Demande%20de%20contact">{{mail}}</a>
            </li>
          </ul>

          </div>

          <div class="contact__right-part">
            <contactForm />
          </div>

        </div>

    </div>
</template>

<style>

.contact{
  padding: 1rem;
  height: 100vh;
}
.contact h1{
  text-align: center;
  color: #fff;
  font-family: 'Japon';
  font-size: 3rem;
}

.contact p{
  color: #fff;
  margin-top: 10px;
  font-family: 'Playfair';
  padding: 10px;
}

.contact ul li{
  padding-top: 20px;
  list-style: none;
  font-size: 18px;
  line-height: 1.3;
  font-family: 'Playfair';
  position: relative;
}

.contact ul li svg{
  color: #BC002D;
  width: 30px;
  text-align: center;
  font-size: 22px;
}

.contact ul li span,
.contact ul li a{
  padding-left: 20px;
  color: #fff;
}

.contact__right-part{
  margin-top: 4rem;
}

.contact h4{
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px;
  font-family: 'Playfair';
  text-align: center;
  color: #fff;
}



@media (min-width: 768px) {
    .contact .container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }

    .contact ul{
      padding-left: 10px;
    }

    .contact__right-part{
      max-width: 60%;
    }
  }


  @media (min-width: 1024px) {
    .contact .container {
     padding: 0 4rem;
      
    }

    .contact ul{
      padding-left: 10px;
    }

    .contact__right-part{
      max-width: 50%;
    }
  }

</style>