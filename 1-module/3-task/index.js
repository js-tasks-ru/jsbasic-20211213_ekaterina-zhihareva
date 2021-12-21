function ucFirst(str) {
    if (str.length == 1) {
    return(str.toUpperCase());
  }
  
 // else  if (str = null) {
 //    return('');
 // }
  else {
  return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
