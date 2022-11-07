<script>
export default{
  name:'Contactform'
}
</script>

<template>
  <h4>Envoyez nous un message</h4>

  <form action="">

    <div class="form__container">

      <div class="column-6">
        <div class="form__input-container">
          <input type="text" name="name" id="name" placeholder="Votre nom" class="form-custom">
        </div>
      </div>

      <div class="column-6">
        <div class="form__input-container">
          <input type="email" name="email" id="email" placeholder="Votre email" class="form-custom">
        </div>
      </div>

      <div class="column-12">
        <div class="form__input-container">
          <input type="text" name="subject" id="subject" placeholder="Indiquer le sujet" class="form-custom">                  </div>
      </div>

      <div class="column-12">
        <div class="form__input-container">
          <textarea type="text" name="message" id="message" rows="5" placeholder="Votre message" class="form-custom"></textarea>                
        </div>
      </div>

      <div class="valideCheck-container">
      <label class="checkbox">
        <input class="checkbox_input" type="checkbox" name="valideCheck" id="valideCheck">
          <svg class="checkbox_check" width="25" height="25">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
      <span>Je donne mon autorisation pour etre recontacté</span></label>
      </div>

      <div class="column-12">
        <div class="form__input-container send">
          <input type="submit" name="sendMsg" id="sendMsg" class="btn sendMsg" value="Envoyer">                  </div>
      </div>

    </div>

  </form>
</template>

<style>
.contact__right-part form{
position: relative;
}

.form__container{
  display: flex;
  flex-wrap: wrap;
}

.form__container .column-6{
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
}

.form__container .column-12{
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
}

.form__input-container{
  margin-bottom: 1rem;
}

.form-custom{
  color: #fff;
  background: none;
  border: 1px solid rgba(255,255,255,.3);
  border-radius: 4px;
  box-shadow: none;
  font-size: 16px!important;
  height: calc(2em + 0.75rem + 2px);
  width: 100%;
  padding-left: 10px;
}

textarea.form-custom{
  height: auto;
}

.valideCheck-container{
  padding-left: 10px;
  display: flex;
}

.valideCheck-container .checkbox{
  cursor: pointer;
  font-size: 10px;
  display: contents;
}

.checkbox:hover .checkbox_check {
    background: #BC002D;
}

.checkbox_input:checked+.checkbox_check {
    background: #BC002D;
    stroke-dashoffset: 0;
}

.valideCheck-container .checkbox input[type=checkbox]{
  box-sizing: border-box;
  padding: 0;
}

.checkbox_input{
  width: 0;
  height: 0;
  opacity: 0;
}

.checkbox_check {
    border: 0.2rem solid #BC002D;
    stroke: #f9f9f9;
    stroke-dasharray: 25;
    stroke-dashoffset: 25;
    stroke-linecap: round;
    stroke-width: 0.2em;
    border-radius: 0.3em;
    fill: none;
    transition: background 0.4s,stroke-dashoffset 0.6s;
}

.checkbox span {
    margin-left: 10px;
    font-size: 14px;
    color: #fff;
}

.send{
  margin-top: 2rem;
}

.send .sendMsg {
  color: #fff;
    background-color: #BC002D;
    padding: 15px 35px;
    border: none;
    transition: 1s ease-in;
    font-size: 14px;
    position: absolute;
    right: 0;
}
</style>