const CartComponent = {
    template: `
        <div class="cart">
            <span><i class="fas fa-shopping-cart me-2"></i> Panier(<b><span class="text-success">{{ cart }}</span></b>)</span>
        </div>
    `,
    props: ['cart']
}

export default CartComponent;