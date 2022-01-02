let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let arr = str.split(/[ ,]+/);
 
  let arr_min = +arr[0];
  let arr_max = arr_min;
  for (let i = 0; i < arr.length; i++) {
    let temp = +arr[i];
    if (temp < arr_min) arr_min = temp;
    if (temp > arr_max) arr_max = temp;
  }
  return {min: arr_min, max: arr_max};

}
console.log(getMinMax(inputData));
