let register = document.getElementById("register-form");
register.addEventListener("submit", function (event) {
  event.preventDefault(); //// Ngăn sự kiện reload mặc định của trình duyệt.

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  // in ra email và pass người dùng nhập được nhé
  const data = {
    email: register.email.value.trim(),
    password: register.password.value.trim(),
  }

  if (data.email.length == 0 && data.password.length == 0) {
    alert("Please input your email & password");
  }
  else if (data.password.length < 8) {
    alert("Password must be at least 8 characters");
  }
  else if (!data.password.match(lowerCaseLetter)) {
    alert("Password must be contain a lowercase letter");
  }
  else if (!data.password.match(upperCaseLetter)) {
    alert("Password must be contain a uppercase letter");
  }
  else if (!data.password.match(numbers)) {
    alert("Password must be contain a number or special character");
  }
  else {
    console.log("Xử lý với LocalStorage");
  }
})