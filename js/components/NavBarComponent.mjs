const NavBarComponent = {
    template: `
        <nav>
            <ul>
                <li><a class="text-dark" href="#">Accueil</a></li>
                <li><a class="text-dark" href="#">Produits</a></li>
                <li><a class="text-dark" href="#">Qui sommes nous?</a></li>
            </ul>
            <cart-component :cart="cart"></cart-component>
        </nav>
        <hr>
    `,
    props: ['cart']
}

export default NavBarComponent;