/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
import CONFIG from '../../globals/config';

const restoDetail = (detail) => `
  <h2 class="Resto__title">${detail.name}</h2>
  <img class="Resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" alt="${detail.name}" />
  <div class="Resto__info">
  <h3>Information</h3>
    <h4>Name</h4>
    <p>${detail.name}</p>
    <h4>Addres</h4>
    <p>${detail.address}</p>
    <h4>Rating</h4>
    <p>${detail.rating}</p>
    <h4>City</h4>
    <p>${detail.city}</p>
    <h4>Deskripsi</h4>
    <p class="deskprisi">${detail.description}</p>
  </div>
  <div class="Resto__info"><h4>Categories</h4>${detail.categories
    .map(
      (categories) => `
      <p>${categories.name}</p>`,
    )
    .join('')}
</div>
<div class="Resto__info"><h4>Drinks</h4>${detail.menus.drinks
    .map(
      (drinks) => `<p>${drinks.name}</p>`,
    )
    .join('')}
</div>
<div class="Resto__info"><h4>Foods</h4>${detail.menus.foods
    .map(
      (foods) => `<p>${foods.name}</p>`,
    )
    .join('')}
</div>
<div class="Resto__info"><h4>Review</h4>${detail.customerReviews
    .map(
      (customerReviews) => `<div class="Resto__info">
    <p>Nama : ${customerReviews.name}</p>
    <p>Tanggal : ${customerReviews.date}</p>
    <p> Review : ${customerReviews.review}</p></br>
  </div>`,
    )
    .join('')}
</div>
`;

const restoTemplate = (restaurants) => `
  <div class="Resto-item">
    <div class="Resto-item__header">
        <img class="Resto-item__header__poster lazyload" alt="${restaurants.name}"
            data-src="${restaurants.pictureId ? CONFIG.BASE_IMAGE_URL + restaurants.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="Resto-item__header__rating">
            <p>⭐️<span class="Resto-item__header__rating__score">${restaurants.rating}</span></p>
        </div>
    </div>
    <div class="Resto-item__content">
        <a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a>
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
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
