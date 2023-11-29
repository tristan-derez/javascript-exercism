// @ts-check

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return function translate(x, y) {
    const translatedX = x + dx;
    const translatedY = y + dy;

    return [translatedX, translatedY];
  };
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function scaler(x, y) {
    const scaleX = x * sx;
    const scaleY = y * sy;

    return [scaleX, scaleY];
  };
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return function (x, y) {
    const resultOfF = f(x, y);

    const transformedCoordinates = g(resultOfF[0], resultOfF[1]);

    return transformedCoordinates;
  };
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let lastX = null;
  let lastY = null;
  let lastResult = null;

  return function (x, y) {
    if (x === lastX && y === lastY) {
      return lastResult;
    } else {
      lastX = x;
      lastY = y;
      lastResult = f(x, y);
      return lastResult;
    }
  };
}
