"use strict";

let originalCart = [];
let cart = [];
const products = [
    {
        name: 'Село Зелёное',
        price: 100,
        quantity: 1
    },
    {
        name: 'Makfa',
        price: 250,
        quantity: 1
    },
    {
        name: 'Сыр',
        price: 70,
        quantity: 2
    },
    {
        name: 'Хлеб',
        price: 25,
        quantity: 3
    },
    {
        name: 'Любятово',
        price: 300,
        quantity: 1
    }
];

cart.push(products[0]);
cart.push(products[1]);
cart.push(products[2]);
cart.push(products[3]);
cart.push(products[4]);
originalCart = cart;

function updateCart() {
    let cartContainer = document.getElementById('cart');
    let totalElement = document.getElementById('total');

    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        let productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <span>${product.name} - ${product.price} руб x ${product.quantity} = ${product.price * product.quantity} руб</span>
            <button class="button" onclick="removeProduct(${index})">Удалить</button>
            <button class="button" onclick="addQuantity(${index})">Добавить</button>`;
        cartContainer.append(productElement);
        total += product.price * product.quantity;
    });

    totalElement.textContent = `Цена: ${total} руб`;
}

function removeProduct(index) {
    if (cart[index].quantity != 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

function addQuantity(index) {
    cart[index].quantity++;
    updateCart();
}

function clearCart() {
    cart.length = 0;
    updateCart();
}

function sortAscending() {
    cart.sort((a, b) => a.price - b.price);
    updateCart();
}

function sortDescending() {
    cart.sort((a, b) => b.price - a.price);
    updateCart();
}

function applyFilter() {
    let minimum = document.getElementById('minPriceInput');
    let maximum = document.getElementById('maxPriceInput');

    const minPrice = parseFloat(minimum.value) || 0;
    const maxPrice = parseFloat(maximum.value) || Infinity;

    cart = filterByPrice(originalCart, minPrice, maxPrice);
    updateCart();
}

function resetFilter() {
    let minimum = document.getElementById('minPriceInput');
    let maximum = document.getElementById('maxPriceInput');

    minimum.value = '';
    maximum.value = '';

    cart = originalCart;
    updateCart();
}

function filterByPrice(products, min, max) {
    return products.filter(product => product.price >= min && product.price <= max);
}

updateCart();
