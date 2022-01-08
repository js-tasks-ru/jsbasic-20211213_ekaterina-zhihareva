function hideSelf() {
  let bttn = document.querySelector(".hide-self-button");
  bttn.addEventListener("click", temp);
 
    function temp() {
      bttn.hidden = true;
    }
}

hideSelf();