/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const firstCondition = 'Anda Belum Punya Resto Favorite';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#Restos');
  I.see(firstCondition, '#Restos');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(firstCondition, '#Restos');

  I.amOnPage('/');

  I.seeElement('.Resto-item__content a');
  const firstCard = locate('.Resto-item__content a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.Resto-item__content a');
  const likedCardTitle = await I.grabTextFrom('.Resto-item__content a');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(firstCondition, '#Restos');

  I.amOnPage('/');

  // melihat card restaurant pertama dan mengkliknya ke detail
  I.seeElement('.Resto-item__content a');
  const firstCard = locate('.Resto-item__content a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // melike restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav dan membandingakan dg restaurant yg diklik
  I.amOnPage('/#/like');
  I.seeElement('.Resto-item__content a');
  const likedCardTitle = await I.grabTextFrom('.Resto-item__content a');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // mengklik card restaurant yg ada di fav
  I.click(likedCardTitle);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/like');
  I.seeElement('#Restos');
  const noFavRestaurant = await I.grabTextFrom('#Restos');

  // mencek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(noFavRestaurant, firstCondition);
});
