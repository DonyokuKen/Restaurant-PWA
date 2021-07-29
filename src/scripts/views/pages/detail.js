/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import {
  restoDetail,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <div id="Resto" class="Resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#Resto');
    restoContainer.innerHTML = restoDetail(data);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      data,
    });
  },
};

export default Detail;
