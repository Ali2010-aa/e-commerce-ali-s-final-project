let loggedInUserName = localStorage.getItem("logged-in-user-name");
let loggedInUserId = localStorage.getItem("logged-in-user-id");
let loggedInUserEmail = localStorage.getItem("logged-in-user-email");

$(function () {
  $(".navUserLogo").on("click", function () {
    $(".user-section").removeClass("hide");
    $(".user-section").addClass("show");
  });
  $("#userLogo").on("click", function () {
    $(".user-section").removeClass("show");
    $(".user-section").addClass("hide");
  });
  $(".username").text("Username: " + loggedInUserName);
  $(".userId").text("ID: " + loggedInUserId);
  $(".userMail").text("Email: " + loggedInUserEmail);
  $(".btn-outline-danger").on("click", function () {
    let confirmAlert = confirm("Are you sure you want to log out?");
    if (confirmAlert) {
      localStorage.removeItem("logged-in-user-id");
      localStorage.removeItem("logged-in-user-name");
      localStorage.removeItem("logged-in-user-email");
      window.location.href = "/html/logIn.html";
    }
  });
});
