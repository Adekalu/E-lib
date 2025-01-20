$(".menu-btn").click(function(){
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");


});

let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
   // const totalPriceElement = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product}`;
        cartItems.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice;
    cartCount.textContent;

}

function resetCart() {
    cart = [];
    totalPrice = 0;
    updateCart();
}

document.getElementById('frmSearch').onsubmit = function(){
    window.location = 'https://www.google.com/search?q=site:yoursitename.com'
    return false; 
}




