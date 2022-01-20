function toggleText() {
  let bttn = document.querySelector(".toggle-text-button");
  let text = document.querySelector('#text'); 

  bttn.addEventListener("click", handler);

  function handler() {
      text.hidden = !text.hidden;
  }
}
toggleText();

