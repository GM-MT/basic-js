import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} 
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  
  let arr = String(n).split('').map(Number);
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return +arr.join('');
}