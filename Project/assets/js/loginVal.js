document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

function validate() {
  var password = document.getElementById("password").value;

  if (password.toString().length < 8) {
    document.getElementById("demo").innerHTML =
      "Password must contain atleast 8 characters";
    return false;
  }

  document.getElementById("demo").innerHTML = "";
  return true;
}

function reset() {
  document.querySelectorAll("input").forEach((item) => {
    if (item.type != "submit") item.value = "";
  });
  return false;
}
