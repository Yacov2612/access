function addToCart() {
    let cart = document.getElementById("cart");
    let cartItems = document.getElementById("cart-items");
    
    let size = document.getElementById("size").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("product-price").innerText;
    
    let item = document.createElement("div");
    item.classList.add("cart-item");

    item.innerHTML = `
        <img src="1.jpg" alt="Nike Dunk">
        <p><strong>Модные кроссовки Nike Dunk</strong></p>
        <p>Размер: ${size}</p>
        <p>Количество: ${quantity}</p>
        <p>Цена: ${price} ₽</p>
    `;

    cartItems.innerHTML = ""; // Очищаем корзину перед добавлением нового товара
    cartItems.appendChild(item);

    cart.classList.add("open"); // Показываем корзину
}

function closeCart() {
    document.getElementById("cart").classList.remove("open");
}