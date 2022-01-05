const ProductComponent = {
    template: `
        <div class="card" style="width: 30rem;">
            <img :src="image" class="card-img-top w-50 m-auto" :alt="product">

            <div class="d-flex">
                <span v-for="(variant, ind) in variants" :key="variant.id" @mouseover="activeVariant = ind" class="pill"
                    :style="{ backgroundColor: variant.pillColor }">{{
                    variant.color }}
                </span>
            </div>

            <hr>

            <div class="card-body">

                <h3 class="card-title text-center">{{ product }}</h3>
                <p class="card-text opacity-75">{{ description }}</p>
                <p class="text-success" v-if="inStock"><i class="fas fa-circle me-2"> </i><i>En Stock</i></p>
                <p class="text-danger" v-else><i class="fas fa-circle me-2"> </i><i>Rupture de Stock</i></p>
                <ul>
                    <li v-for="(spec, ind) in specs" v-bind:key="ind">
                        {{ spec }}
                    </li>
                </ul>
                <button @click="addProduct" class="btn btn-dark w-100" :disabled="!inStock">Ajouter
                    au panier</button>
            </div>
        </div>
    `,
    data() {
        return {
            product: 'iPhone 13',
            description: 'Un système photo nettement plus puissant. Un écran si réactif qu’il renouvelle vos sensations à chaque interaction.',
            specs: ['Waterproof', 'Écran HDR', 'Haptic Touch'],
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
        },
        addProduct() {
            this.$emit('addProduct')
        }
    },
    computed: {
        image() {
            return this.variants[this.activeVariant].image
        },
        inStock() {
            return this.variants[this.activeVariant].quantity > 0 ? true : false
        }
    },
    props: ['cart']

}

export default ProductComponent;