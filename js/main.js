import app from './app.js';
import NavBarComponent from './components/NavBarComponent.mjs';
import CartComponent from './components/CartComponent.mjs';

// Vue Application
const appInstance = Vue.createApp(app);

// Components
appInstance.component('navbar-component', NavBarComponent)
appInstance.component('cart-component', CartComponent)

// Mounting
appInstance.mount('#app');
