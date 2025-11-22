let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let rePassword = document.querySelector("#confirmPassword");
let signUpBtn = document.querySelector("#signUpBtn");

let users = [];
let usersString = localStorage.getItem("users");
if (usersString) {
  users = JSON.parse(usersString);
}

signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let username = userName.value;
  let userEmail = email.value;
  let userPassword = password.value;
  let userConfirmPassword = rePassword.value;
  let userExists = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === userEmail) {
      userExists = true;
      break;
    }
  }

  if (userExists) {
    alert("This email is already registered. Please log in.");
  } else if (userPassword !== userConfirmPassword) {
    alert("Passwords do not match. Please try again.");
  } else {
    let userId = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id > userId) {
        userId = users[i].id;
      }
    }
    userId++;

    let user = {
      id: userId,
      name: username,
      email: userEmail,
      password: userPassword,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now log in.");
    userName.value = "";
    email.value = "";
    password.value = "";
    userConfirmPassword.value = "";
    window.location.href = "login.html";
  }
});
