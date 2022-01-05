import ReviewFormComponent from "./ReviewFormComponent.mjs";
import ReviewListComponent from "./ReviewListComponent.mjs";

const ReviewZoneComponent = {
    template: `
        <div class="review-container">
            <review-form-component @review-submitted="addReview"></review-form-component>
            <review-list-component v-if="reviews.length > 0" :reviews="reviews"></review-list-component>
        </div>
    `,
    components: {
        'review-form-component': ReviewFormComponent,
        'review-list-component': ReviewListComponent
    },
    data() {
        return {
            reviews: []
        }
    },
    methods: {
        addReview(review) {
            this.reviews.push(review);
        }
    }

}

export default ReviewZoneComponent;