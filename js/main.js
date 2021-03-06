import app from './app.js';
import NavBarComponent from './components/NavBarComponent.mjs';
import CartComponent from './components/CartComponent.mjs';
import ProductComponent from './components/ProductComponent.mjs';
import ReviewZoneComponent from './components/review/ReviewZoneComponent.mjs';

// Vue Application
const appInstance = Vue.createApp(app);

// Components
appInstance.component('navbar-component', NavBarComponent)
appInstance.component('cart-component', CartComponent)
appInstance.component('product-component', ProductComponent)
appInstance.component('review-zone-component', ReviewZoneComponent)

// Mounting
appInstance.mount('#app');
