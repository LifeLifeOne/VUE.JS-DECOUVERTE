Vue.createApp({}).component('nav-bar', {
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
});