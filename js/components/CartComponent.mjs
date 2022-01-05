const CartComponent = {
    template: `
        <div class="cart">
            <span><i class="fas fa-shopping-cart me-2"></i> Panier({{ cartCount }})</span>
        </div>
    `,
    props: ['cart-count']
}

export default CartComponent;