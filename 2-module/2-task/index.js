function isEmpty(obj) {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        return false;
    }
}
return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false
