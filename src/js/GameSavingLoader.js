/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

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
            reject(error);
          }
        }).catch((error) => {
        });
      }).catch((error) => {
      });
    });
  }
}
