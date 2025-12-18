"use strict";

const productsData = [
    {
        id: 1,
        title: "Зарядний пристрій IMAX B6 80W Atmega32",
        link: "https://customlight.com.ua/ua/p348773509-zaryadnij-pristrij-imax.html",
        image: "images/product-image.webp",
        price: 857,
        priceMonth: 428,
        available: true,
        rating: 99,
    },
    {
        id: 2,
        title: "Термоповітряна паяльна станція YIHUA 8786D",
        link: "https://rozetka.com.ua/ua/307640028/p307640028/",
        image: "https://content2.rozetka.com.ua/goods/images/big/397301194.jpg", // перевіримо зовнішні посилання
        price: 3799,
        priceMonth: 750,
        available: false, // Зверни увагу!
        rating: 85,
    },
    {
        id: 3,
        title: "Цифровий мультиметр вимірювальний тестер Dіgіtаl DТ 830 В із дзвінком",
        link: "https://rozetka.com.ua/ua/368032980/p368032980/",
        image: "https://content1.rozetka.com.ua/goods/images/big/314761093.jpg",
        price: 200,
        priceMonth: 100,
        available: true,
        rating: 50,
    },
];

function getCardData(cardsDataArray) {
    cardsDataArray.forEach((product) => {
        const { title, link, image, price, priceMonth, available, rating } = product;
        const productStoreLink = link.slice(0, link.indexOf('ua') + 2);
        const productStoreName = productStoreLink.slice(productStoreLink.indexOf('/') + 2);
        
        const cardHTML = createCardHTML(title, link, image, price, priceMonth, available, rating, productStoreLink, productStoreName);
        appendCard(cardHTML);
    });
}

function createCardHTML(
    productName,
    productLink,
    productImageLink,
    productPrice,
    productPriceMonth,
    productInStock,
    productRating,
    productStoreLink,
    productStoreName
) {
    return ` <article class="page__card product-card">
            <div class="product-card__header">
                <a href="${productLink}" class="product-card__image" target="_blank" aria-label="${productName}">
                    <img src="${productImageLink}" alt="${productName}">
                </a>
                <button class="favorite-button" aria-label="Додати в обране">
                    <svg width="24" height="24">
                        <use href="images/sprite.svg#heart"></use>
                    </svg>
                </button>
            </div>
            <div class="product-card__body">
                <a href="${productLink}" class="product-card__title-link" target="_blank" aria-label="${productName}">
                    <h2 class="product-card__title">${productName}</h2>
                </a>
                <h3 class="product-card__status ${
                    productInStock ? "product-card__status--available" : "product-card__status--out"
                }">
                ${productInStock ? "В наявності" : "Закінчився"}
                </h3>
                <div class="product-card__price-info price-info">
                    <svg class="price-info__icon" width="24" height="24" aria-hidden="true">
                        <use href="images/sprite.svg#diagram"></use>
                    </svg>
                    від
                    <span class="price-info__value">
                        <span>${productPriceMonth}</span>
                    </span>
                    ₴/міс
                </div>
                <div class="product-card__price price">
                    <span class="price__value">${productPrice}</span>
                    <span class="price__currency">₴</span>
                </div>
                <button class="product-card__button" type="button" aria-label="Купити">Купити</button>
            </div>
            <div class="product-card__footer">
                <a class="store-address" href="${productStoreLink}" target="_blank">${productStoreName}</a>
                <div class="rating-block">
                    <svg class="rating-block__icon" width="24" height="24" aria-hidden="true">
                        <use href="images/sprite.svg#checkmark"></use>
                    </svg>
                    <div class="rating-block__percentage">
                        <span class="rating-block__value">${productRating}</span>
                        <span>%</span>
                    </div>
                </div>
            </div>
        </article>`;
}

function appendCard (card) {
    const cardContainer = document.querySelector('.page');
    cardContainer.insertAdjacentHTML('beforeend', card);
}

function init (productsData) {
    getCardData(productsData);
}

init(productsData);
