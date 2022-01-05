const ReviewListComponent = {
    template: `
        <div class="review-list">
            <div v-for="(review, index) in reviews" :key="index" class="review-item">
                <h5 @send-review="displayReview">Utilisateur: {{ review.name }}</h5>
                <strong>Note: {{ review.rating }}</strong>
                <p class="opacity-75">Avis: "{{ review.review }}"</p>
                <hr>
            </div>
        </div>
    `,
    // props: ['reviews'],
    props: {
        reviews: {
            type: Array,
            required: true
        }
    }
}

export default ReviewListComponent;