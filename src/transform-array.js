import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  
  let transArr = [];

  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if ('--discard-next' != arr[i - 2]) transArr.pop();
        break;
      case '--double-next':
        if (arr.length > i + 1) transArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (arr[i - 2] != '--discard-next' && 0 <= i - 1) transArr.push(arr[i - 1]);
        break;
      default:
        transArr.push(arr[i]);
        
    }
  }
  return transArr;
}
