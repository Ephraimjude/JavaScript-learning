let loginForm = document.querySelector("form");
let email = document.getElementById("email");
let password = document.getElementById("passwrd");
let confirmpassword = document.getElementById("repasswd");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log('email:', email.value);
  console.log('password:', password.value);
});

function onChange() {
  if (confirmpassword.value === password.value) {
    confirmpassword.setCustomValidity('');
  } else {
    confirmpassword.setCustomValidity('Password do not match');
  }
}

password.addEventListener('change', onChange);
confirmpassword.addEventListener('change', onChange);
