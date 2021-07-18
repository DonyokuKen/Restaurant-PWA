/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-dupe-class-members */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import API_ENDPOINT from '../globals/api-endpoint';
import restaurant from '../views/pages/detail';

class RestoDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async reviewResto() {
    const response = await fetch(restaurant);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestoDbSource;
