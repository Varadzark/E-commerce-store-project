document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ];

    const cart = [];

    function displayProducts() {
        const productContainer = document.getElementById('products');
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productElement);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            displayCart();
        }
    }

    function displayCart() {
        const cartContainer = document.getElementById('cart-items');
        cartContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                ${item.name} - $${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        displayCart();
    }

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    displayProducts();
});