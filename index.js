const btnInput = document.querySelector("#input-email");
const btnSubmit = document.querySelector("#btn-submit");
const errorMsg = document.querySelector("#error-msg");
const expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btnInput.addEventListener("keyup", (e) => {
  if (e.target.value.match(expresion)) {
    errorMsg.classList.add("displayNone");
    btnInput.classList.remove("redBorder");
    btnSubmit.removeAttribute("disabled", "");
  } else {
    errorMsg.classList.remove("displayNone");
    btnInput.classList.add("redBorder");
    btnSubmit.setAttribute("disabled", "");
  }
});
