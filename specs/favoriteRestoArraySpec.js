/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {

  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((restaurant) => restaurant.id === id);
  },

  getAllRestos() {
    return favoriteResto;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteResto
    if (this.getResto(restaurant.id)) {
      return;
    }

    favoriteResto.push(restaurant);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
