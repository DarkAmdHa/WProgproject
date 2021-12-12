function validate() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  apos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
  if (password.toString().length < 8) {
    document.getElementById("demo").innerHTML =
      "Password must contain atleast 8 characters";
    return false;
  }
  if (password.toString() != confirmPassword.toString()) {
    document.getElementById("demo").innerHTML = "Passwords don't match";
    return false;
  }
  if (phone.length != 11) {
    document.getElementById("demo").innerHTML =
      "The length of phone number is not eleven";
    return false;
  }
  if (apos < 1 || dotpos - apos < 2) {
    document.getElementById("demo").innerHTML = "incorrect email";
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
