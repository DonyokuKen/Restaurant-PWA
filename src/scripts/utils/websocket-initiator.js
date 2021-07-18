/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';
import RestoDbSource from '../data/restodb-source';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurants = RestoDbSource.listResto(message.data);
    NotificationHelper.sendNotification({
      title: 'Resto Update!',
      options: {
        body: restaurants.description,
        image: `${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;
