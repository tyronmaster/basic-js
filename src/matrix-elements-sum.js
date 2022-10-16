const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  const matrixRows = matrix.length;
  const matrixCols = matrix[0].length;
  if(!matrixRows || !matrixCols){
      throw new Error('Wrong matrix');
  }
  let sum = 0;
  for(let i = 0; i < matrixRows; i++){
      for(let j = 0; j < matrixCols; j++){
          let k = i - 1 > 0 ? i - 1 : 0;
          if(matrix[i][j] > 0 && matrix[k][j] > 0) {
              sum += matrix[i][j];
          }
      }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
