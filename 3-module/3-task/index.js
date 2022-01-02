function camelize(str) {
  let arr;
  arr = str.split("-");
  for(var i=1; i<arr.length; i++){
      var newStr = arr[i].charAt(0).toUpperCase();
      for ( var j = 1 ; j < arr[i].length ;j++){
          newStr += arr[i].charAt(j);
      }
      arr[i] = newStr;
       }
  return  arr.join("");
}
console.log(camelize("list-style-image"));
console.log(camelize("background-color"));
