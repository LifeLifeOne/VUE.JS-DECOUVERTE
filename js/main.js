const app = Vue.createApp({
    data() {
        return {
            product: 'iPhone 13',
            description: 'Un système photo nettement plus puissant. Un écran si réactif qu’il renouvelle vos sensations à chaque interaction.',
            specs: ['Waterproof', 'Écran HDR', 'Haptic Touch'],
            cart: 0,
            variants: [
                { id: '1', quantity: 12, color: 'Bleu', pillColor: '#1A5F7A', image: './assets/images/iphone-13-blue.png' },
                { id: '2', quantity: 0, color: 'Noir', pillColor: '#111', image: './assets/images/iphone-13-midnight.png' },
                { id: '3', quantity: 0, color: 'Rouge', pillColor: '#FF5959', image: './assets/images/iphone-13-red.png' }
            ],
            activeVariant: 0
        }
    },
    methods: {
        colorChange(imageUrl) {
            this.image = imageUrl;
        }
    },
    computed: {
        image() {
            return this.variants[this.activeVariant].image
        },
        inStock() {
            return this.variants[this.activeVariant].quantity > 0 ? true : false
        }
    }
});
app.component('nav-bar', {
    template: `
        <nav>
            <ul>
                <li><a class="text-dark" href="#">Accueil</a></li>
                <li><a class="text-dark" href="#">Produits</a></li>
                <li><a class="text-dark" href="#">Qui sommes nous?</a></li>
            </ul>
            <div class="cart">
                <span><i class="fas fa-shopping-cart me-2"></i> Panier({{ cart }})</span>
            </div>
        </nav>
    `
})
app.mount('#app');
