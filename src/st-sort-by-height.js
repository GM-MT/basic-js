import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  
  let arrIndex = [];
	let pos;
	while ((pos = arr.lastIndexOf(-1)) != -1) {
		arrIndex.push(pos);
	  arr.splice(pos, 1);
	}
	arr.sort((x,y) => x - y);
	arrIndex.reverse().forEach(item => arr.splice(item, 0, -1));
	return arr;
}
