const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    let added = false;
    // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
    order.map(o => {
        if (productId === o.id) {
            alert('Товар уже добавлен');
            added = true;
        }
    })
    // TODO: если товар еще не в корзине, добавить его из массива products
    if (!added) {
        products.forEach(p => {
            if (p.id === productId) {
                order = [
                    ...order,
                    p
                ]
            }
        })
    }

    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины
    order = order.filter(o => o.id !== productId);
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    // TODO: опишите функционал подсчета общей стоимости заказа
    let totalPrice = order.reduce((total, amount) => total + amount.price, 0);

    // Не меняйте эту строчку
    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}