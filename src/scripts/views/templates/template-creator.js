/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
import CONFIG from '../../globals/config';

const restoDetail = (restaurant) => `
  <h2 class="Resto__title">${restaurant.name}</h2>
  <img class="Resto__poster lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="Resto__info">
  <h3>Information</h3>
    <h4>Name</h4>
    <p>${restaurant.name}</p>
    <h4>Addres</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Deskripsi</h4>
    <p class="deskprisi">${restaurant.description}</p>
  </div>
`;

const restoCategories = (restaurant) => restaurant.categories.map((categories) => `
  <div class="Resto__info">
    <p>${categories.name}</p>
  </div>
`).join('');

const restoDrinks = (restaurant) => restaurant.menus.drinks.map((drinks) => `
  <div class="Resto__info">
    <p>${drinks.name}</p>
  </div>
`).join('');

const restoFoods = (restaurant) => restaurant.menus.foods.map((foods) => `
  <div class="Resto__info">
    <p>${foods.name}</p>
  </div>
`).join('');

const restoReview = (restaurant) => restaurant.customerReviews.map((customerReviews) => `
  <div class="Resto__info">
    <p>Nama : ${customerReviews.name}</p>
    <p>Tanggal : ${customerReviews.date}</p>
    <p> Review : ${customerReviews.review}</p></br>
  </div>
`).join('');

const restoTemplate = (restaurants) => `
  <div class="Resto-item">
    <div class="Resto-item__header">
        <img class="Resto-item__header__poster lazyload" alt="${restaurants.name}"
            src="${restaurants.pictureId ? CONFIG.BASE_IMAGE_URL + restaurants.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="Resto-item__header__rating">
            <p>⭐️<span class="Resto-item__header__rating__score">${restaurants.rating}</span></p>
        </div>
    </div>
    <div class="Resto-item__content">
        <h3><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
        <p>${restaurants.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this Resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restoTemplate,
  restoDetail,
  restoReview,
  restoDrinks,
  restoFoods,
  restoCategories,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
