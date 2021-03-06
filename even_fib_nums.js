/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs(maxFibValue) {
  var sum = 0;
  var fibNum = [1, 2];
  var currentFib = 0;
  var i = 0;

while(currentFib < maxFibValue){
  currentFib = fibNum[i] + fibNum[i + 1];
  fibNum.push(currentFib);
  i++;
  if(fibNum[i] % 2 === 0){
    sum += fibNum[i];
  }
}
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};