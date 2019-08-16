// Sum of Two Lowest Numbers

function sumOfTwoLowestNumbers(numbers){
  let ordered = numbers.sort(function(a,b){
    return a-b;
  });
  let sum = ordered[0] + ordered[1];
  return sum;
}

console.log(sumOfTwoLowestNumbers([19, 5, 42, 2, 77]));  
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));