/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import RestoDbSource from '../../data/restodb-source';
import { restoTemplate } from '../templates/template-creator';

const ListResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Resto List</h2>
        <div id="Restos" class="Restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const resto = await RestoDbSource.listResto();
    const restoContainer = document.querySelector('#Restos');
    resto.forEach((restaurants) => {
      restoContainer.innerHTML += restoTemplate(restaurants);
    });
  },
};
export default ListResto;
