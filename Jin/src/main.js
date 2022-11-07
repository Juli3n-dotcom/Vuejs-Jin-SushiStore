import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBagShopping, faXmark, faMinus,faPlus ,faTrash,faMapLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

import './assets/main.css'

library.add(faBagShopping, faXmark, faMinus,faPlus,faTrash,faMapLocationDot,faPhone, faEnvelope)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
