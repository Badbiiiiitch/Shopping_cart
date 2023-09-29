document.addEventListener("DOMContentLoaded", function(){
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");

    let cart = [];

    const itemPrices = [10.00, 15.00, 35.15, 23.95, 44.63, 79.81, 16.00, 49.54];

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", ()=>{
            const product = {
                name: `Item ${index + 1}`,
                price: itemPrices[index],
            };
            cart.push(product);
            updateCartUI();
        });
    });

    function updateCartUI() {
        cartItemsList.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            const cartItem = document.createElement("li");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;
            cartItemsList.appendChild(cartItem);
            total+=item.price;
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;

        const removeButtons = document.querySelectorAll(".remove-from-cart");
        removeButtons.forEach((button)=> {
            button.addEventListener("click", () => {
                const index = button.getAttribute("data-index");
                cart.splice(index, 1);
                updateCartUI();
            });
        });
    }
});