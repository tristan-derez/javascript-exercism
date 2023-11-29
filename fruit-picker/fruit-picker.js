/// <reference path="./global.d.ts" />
//
// @ts-check

import { notify } from "./notifier";
import { order } from "./grocer";

/**
 * @return void
 */
export function onSuccess() {
  return notify({ message: "SUCCESS" });
}

/**
 * @return void
 */
export function onError() {
  return notify({ message: "ERROR" });
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
  const query = {
    variety,
    quantity,
  };

  orderFromGrocer(query, onSuccess, onError);
}
