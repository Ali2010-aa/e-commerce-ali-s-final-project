let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let logInBtn = document.querySelector("#logInBtn");

let users = [];
let usersString = localStorage.getItem("users");
if (usersString) {
  users = JSON.parse(usersString);
}

logInBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let name = userName.value;
  let pass = password.value;
  let userFound = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name && users[i].password === pass) {
      userFound = true;
      localStorage.setItem("logged-in-user-id", JSON.stringify(users[i].id));
      localStorage.setItem("logged-in-user-name", users[i].name);
      break;
    }
  }
  if (userFound) {
    alert("Log In Successful!");
   window.location.href = "/html/mainPage.html";
  } else {
    alert("Invalid username or password.");
  }
  userName.value = "";
  password.value = "";
});
