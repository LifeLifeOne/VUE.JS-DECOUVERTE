const app = Vue.createApp({
    data() {
        return {
            product: 'iPhone 13',
            description: 'Un système photo nettement plus puissant. Un écran si réactif qu’il renouvelle vos sensations à chaque interaction.',
            src: './assets/images/iphone-13-blue.png',
            available: false,
            specs: ['Waterproof', 'Écran HDR', 'Haptic Touch'],
            cart: 0,
            variants: [
                { id: 'iphone-13-001', color: 'Bleu', pillColor: '#1A5F7A', image: './assets/images/iphone-13-blue.png' },
                { id: 'iphone-13-002', color: 'Noir', pillColor: '#111', image: './assets/images/iphone-13-midnight.png' },
                { id: 'iphone-13-003', color: 'Rouge', pillColor: '#FF5959', image: './assets/images/iphone-13-red.png' }
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        colorChange(imageUrl) {
            this.src = imageUrl;
        }
    }
});
app.mount('#app');