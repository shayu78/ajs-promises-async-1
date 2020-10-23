/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((data) => {
        json(data).then((result) => {
          try {
            resolve(JSON.parse(result));
          } catch (error) {
            // console.error(`Неверный формат JSON. ${error}`);
          }
        }).catch((error) => {
          // console.error(error);
        });
      }).catch((error) => {
        // console.error(error);
      });
    });
  }
}
