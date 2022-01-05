const NavBarComponent = {
    template: `
        <nav>
            <ul>
                <li><a class="text-dark" href="#">Accueil</a></li>
                <li><a class="text-dark" href="#">Produits</a></li>
                <li><a class="text-dark" href="#">Qui sommes nous?</a></li>
            </ul>
            <cart-component :cart-count="cartCount"></cart-component>
        </nav>
    `,
    props: ['cart-count']
}

export default NavBarComponent;