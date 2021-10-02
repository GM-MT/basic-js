import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  // throw new NotImplementedError('Not implemented');
  
  let matrixOut = matrix.map(item => item.slice(0)).map(item => item.fill(0));
  let checks = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j]) {
        checks.forEach(item => {
          if (i + item[0] >= 0 && j + item[1] >= 0 && i + item[0] < matrix.length && j + item[1] < matrix[i].length){
            matrixOut[i + item[0]][j + item[1]]++
          }
        })
      }
    }
  }

  return matrixOut;
}
