const ReviewFormComponent = {
    template: `
        <form class="review-form form-group" @submit.prevent="onSubmit">
            <h3 class="text-center">Vous pouvez laisser un avis sur ce produit</h3>
            <hr>

            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <input v-model="name" class="form-control" type="text" id="name" placeholder="Votre nom">
                </div>
                <div class="d-flex">
                    <label for="rating">Note({{ rating }}) </label>
                    <input v-model.number="rating" type="range" class="form-range ms-3" id="rating" min="1" max="5" :value="rating" step="1">
                </div>
            </div>

            <div class="text-center">
                <label class="form-label" for="review">Votre avis sur ce produit</label>
                <textarea v-model="review" class="form-control" id="review"></textarea>
            </div>

            <div class="text-center">
                <button class="btn btn-primary my-3" type="submit">Envoyer</button>
            </div>
        </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: 3
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                rating: this.rating,
                review: this.review
            }
            this.$emit('review-submitted', productReview)
        }
    }
}

export default ReviewFormComponent;