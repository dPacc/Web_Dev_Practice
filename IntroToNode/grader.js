function average(arr) {
  sum = 0;
  len = arr.length;
  for(var i = 0; i < len; i++) {
    sum += arr[i];
  }
  var avg = sum / len;
  return Math.round(avg);
};

var x = [90, 98, 89, 100, 100, 86, 94];

console.log(average(x));
