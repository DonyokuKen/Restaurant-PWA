/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import {
  restoDetail,
  restoReview,
  restoDrinks,
  restoFoods,
  restoCategories,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="Resto" class="Resto"></div>
      <div><h4>Categories</h4><div id="cate" class="cate"></div> </div></br>
      
      <div id="Resto" class="menus">      <h4>Makanan</h4><h4>Minuman</h4>
      <div id="foods" class="foods"></div>
      <div id="drinks" class="drinks"></div>
      </div></br>
      <div> <h4>Review</h4>
      <div id="review" class="review"></div> </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#Resto');
    restoContainer.innerHTML = restoDetail(restaurant);
    const reviewContainer = document.querySelector('#review');
    reviewContainer.innerHTML = restoReview(restaurant);
    const drinksContainer = document.querySelector('#drinks');
    drinksContainer.innerHTML = restoDrinks(restaurant);
    const foodsContainer = document.querySelector('#foods');
    foodsContainer.innerHTML = restoFoods(restaurant);
    const categories = document.querySelector('#cate');
    categories.innerHTML = restoCategories(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
