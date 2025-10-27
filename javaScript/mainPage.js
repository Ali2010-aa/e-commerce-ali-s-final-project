let loggedInUserName = localStorage.getItem("logged-in-user-name");
let loggedInUserId = localStorage.getItem("logged-in-user-id");
let loggedInUserEmail = localStorage.getItem("logged-in-user-email");

$(function () {
  let storedGames = JSON.parse(localStorage.getItem("games"));
  if (storedGames && storedGames.length > 0) {
    games = storedGames;
  } else {
    let games = [
      {
        id: 1,
        name: "Battlefield 6",
        image: "/images/Battlefield6.png",
        price: "69.99$",
        genre: "Action",
      },
      {
        id: 2,
        name: "Dead By Daylight",
        image: "/images/deadbydaylight.jpg",
        price: "14.99$",
        genre: "Action",
      },
      {
        id: 3,
        name: "GTA V",
        image: "/images/gta5.jpg",
        price: "44.99$",
        genre: "Action",
      },
      {
        id: 4,
        name: "Split Fiction",
        image: "/images/splitfiction.jpg",
        price: "49.99$",
        genre: "Action",
      },
      {
        id: 5,
        name: "Black Desert",
        image: "/images/blackdesert.jpg",
        price: "5.99$",
        genre: "Action",
      },
      {
        id: 6,
        name: "Escape from Duckov",
        image: "/images/escapefromduckov.jpg",
        price: "12.99$",
        genre: "Adventure",
      },
      {
        id: 7,
        name: "PEAK",
        image: "/images/peak.png",
        price: "4.99$",
        genre: "Adventure",
      },
      {
        id: 8,
        name: "Dispatch",
        image: "/images/dispatch.jpg",
        price: "14.49$",
        genre: "Adventure",
      },
      {
        id: 9,
        name: "Rust",
        image: "/images/rust.jpg",
        price: "19.99$",
        genre: "Adventure",
      },
      {
        id: 10,
        name: "The Outer Worlds 2",
        image: "/images/theouterworlds2.jpg",
        price: "48.99$",
        genre: "Adventure",
      },
      {
        id: 11,
        name: "Digimon Story Time Stranger",
        image: "/images/digimonsstorytimestranger.jpg",
        price: "45.99$",
        genre: "RPG",
      },
      {
        id: 12,
        name: "Fellowship",
        image: "/images/fellowship.jpg",
        price: "12.99$",
        genre: "RPG",
      },
      {
        id: 13,
        name: "Baldur's Gate 3",
        image: "/images/baldursgate3.jpg",
        price: "52.99$",
        genre: "RPG",
      },
      {
        id: 14,
        name: "Dying Light The Beast",
        image: "/images/dyinglight.jpg",
        price: "44.99$",
        genre: "RPG",
      },
      {
        id: 15,
        name: "Hades II",
        image: "/images/hades.jpg",
        price: "14.49$",
        genre: "RPG",
      },
      {
        id: 16,
        name: "Crusader Kings III",
        image: "/images/crusaderkings.jpg",
        price: "33.49$",
        genre: "Strategy",
      },
      {
        id: 17,
        name: "CloverPit",
        image: "/images/cloverpit.jpg",
        price: "6.29$",
        genre: "Strategy",
      },
      {
        id: 18,
        name: "Satisfactory",
        image: "/images/satisfactory.jpg",
        price: "18.49$",
        genre: "Strategy",
      },
      {
        id: 19,
        name: "Schedule I",
        image: "/images/schedule.jpg",
        price: "10.49$",
        genre: "Strategy",
      },
      {
        id: 20,
        name: "RimWorld",
        image: "/images/rimworld.jpg",
        price: "16.49$",
        genre: "Strategy",
      },
      {
        id: 21,
        name: "Forza Horizon 5",
        image: " /images/forzahorizon5.jpg",
        price: "34.99$",
        genre: "Sports",
      },
      {
        id: 22,
        name: "iRacing",
        image: "/images/iracing.jpg",
        price: "19.99$",
        genre: "Sports",
      },
      {
        id: 23,
        name: "Riders Republic",
        image: "/images/ridersrepublic.jpg",
        price: "39.99$",
        genre: "Sports",
      },
      {
        id: 24,
        name: "Out of the Park Baseball 26",
        image: "/images/ootp.jpg",
        price: "22.99$",
        genre: "Sports",
      },
    ];
  }
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
  $(".logOutBtn").on("click", function () {
    let confirmAlert = confirm("Are you sure you want to log out?");
    if (confirmAlert) {
      localStorage.removeItem("logged-in-user-id");
      localStorage.removeItem("logged-in-user-name");
      localStorage.removeItem("logged-in-user-email");
      window.location.href = "/html/logIn.html";
    }
  });
  $(document).on("click", ".buy-button", function () {
    let gameBox = $(this).closest(".game-box");
    let gameName = gameBox.find(".game-name").text();
    let gameImage = gameBox.find(".game-image").attr("src");

    $("#exampleModalLabel").text(gameName);
    $(".modal-body").html(
      `<img src="${gameImage}" style="width:100%;border-radius:10px;margin-bottom:10px;"><p>Do you want to buy ${gameName}?</p>`
    );
  });
  $(".modalBuyBtn").on("click", function () {
    alert("The game has been added to your account.");
  });
  $("#addGameBtn").on("click", function () {
    $("#addGameModal").modal("show");
  });
  $("#saveGameBtn").on("click", function () {
    let name = $("#gameNameInput").val().trim();
    let image = $("#gameImageInput").val().trim();
    let price = $("#gamePriceInput").val().trim();
    let genre = $("#gameGenreInput").val();

    if (!name || !image || !price || !genre) {
      alert("Please fill in all fields!");
      return;
    }

    let newGame = {
      id: games.length + 1,
      name: name,
      image: image,
      price: price,
      genre: genre,
    };
    games.push(newGame);
    localStorage.setItem("games", JSON.stringify(games));

    let gameBox = document.createElement("div");
    gameBox.classList.add("game-box");
    gameBox.innerHTML = `
    <img src="${newGame.image}" alt="${newGame.name}" class="game-image"/>
    <h3 class="game-name">${newGame.name}</h3>
    <p class="game-price">${newGame.price}</p>
   <button type="button" class="btn btn-primary buy-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy Now</button>
  `;
    document.querySelector(".games-list").appendChild(gameBox);

    $("#addGameForm")[0].reset();
    $("#addGameModal").modal("hide");
  });
  $(document).on("click", ".delete-game", function () {
    let gameId = $(this).closest("tr").data("game-id");
    let storedGames = JSON.parse(localStorage.getItem("games")) || [];

    storedGames = storedGames.filter((g) => g.id !== gameId);

    localStorage.setItem("games", JSON.stringify(storedGames));

    $(this).closest("tr").remove();

    if ($("#myGamesTable tbody tr").length === 0) {
      $("#myGamesTable tbody").append(`
      <tr>
        <td colspan="6" class="text-center text-muted">You haven’t added any games yet.</td>
      </tr>
    `);
    }
  });
  $("#myGamesBtn").on("click", function () {
    let storedGames = JSON.parse(localStorage.getItem("games")) || [];
    let userGames = storedGames.slice(24);

    let tableBody = $("#myGamesTable tbody");
    tableBody.empty();

    if (userGames.length === 0) {
      tableBody.append(`
      <tr>
        <td colspan="6" class="text-center text-muted">You haven’t added any games yet.</td>
      </tr>
    `);
    } else {
      userGames.forEach((game, index) => {
        tableBody.append(`
        <tr data-game-id="${game.id}">
          <th scope="row">${index + 1}</th>
          <td>${game.name}</td>
          <td><img src="${game.image}" alt="${
          game.name
        }" style="width:60px; border-radius:5px;"></td>
          <td>${game.price}</td>
          <td>${game.genre}</td>
          <td>
            <button class="btn btn-sm btn-danger delete-game">🗑 Delete</button>
          </td>
        </tr>
      `);
      });
    }

    $("#myGamesModal").modal("show");
  });
});

let games = [
  {
    id: 1,
    name: "Battlefield 6",
    image: "/images/Battlefield6.png",
    price: "69.99$",
    genre: "Action",
  },
  {
    id: 2,
    name: "Dead By Daylight",
    image: "/images/deadbydaylight.jpg",
    price: "14.99$",
    genre: "Action",
  },
  {
    id: 3,
    name: "GTA V",
    image: "/images/gta5.jpg",
    price: "44.99$",
    genre: "Action",
  },
  {
    id: 4,
    name: "Split Fiction",
    image: "/images/splitfiction.jpg",
    price: "49.99$",
    genre: "Action",
  },
  {
    id: 5,
    name: "Black Desert",
    image: "/images/blackdesert.jpg",
    price: "5.99$",
    genre: "Action",
  },
  {
    id: 6,
    name: "Escape from Duckov",
    image: "/images/escapefromduckov.jpg",
    price: "12.99$",
    genre: "Adventure",
  },
  {
    id: 7,
    name: "PEAK",
    image: "/images/peak.png",
    price: "4.99$",
    genre: "Adventure",
  },
  {
    id: 8,
    name: "Dispatch",
    image: "/images/dispatch.jpg",
    price: "14.49$",
    genre: "Adventure",
  },
  {
    id: 9,
    name: "Rust",
    image: "/images/rust.jpg",
    price: "19.99$",
    genre: "Adventure",
  },
  {
    id: 10,
    name: "The Outer Worlds 2",
    image: "/images/theouterworlds2.jpg",
    price: "48.99$",
    genre: "Adventure",
  },
  {
    id: 11,
    name: "Digimon Story Time Stranger",
    image: "/images/digimonsstorytimestranger.jpg",
    price: "45.99$",
    genre: "RPG",
  },
  {
    id: 12,
    name: "Fellowship",
    image: "/images/fellowship.jpg",
    price: "12.99$",
    genre: "RPG",
  },
  {
    id: 13,
    name: "Baldur's Gate 3",
    image: "/images/baldursgate3.jpg",
    price: "52.99$",
    genre: "RPG",
  },
  {
    id: 14,
    name: "Dying Light The Beast",
    image: "/images/dyinglight.jpg",
    price: "44.99$",
    genre: "RPG",
  },
  {
    id: 15,
    name: "Hades II",
    image: "/images/hades.jpg",
    price: "14.49$",
    genre: "RPG",
  },
  {
    id: 16,
    name: "Crusader Kings III",
    image: "/images/crusaderkings.jpg",
    price: "33.49$",
    genre: "Strategy",
  },
  {
    id: 17,
    name: "CloverPit",
    image: "/images/cloverpit.jpg",
    price: "6.29$",
    genre: "Strategy",
  },
  {
    id: 18,
    name: "Satisfactory",
    image: "/images/satisfactory.jpg",
    price: "18.49$",
    genre: "Strategy",
  },
  {
    id: 19,
    name: "Schedule I",
    image: "/images/schedule.jpg",
    price: "10.49$",
    genre: "Strategy",
  },
  {
    id: 20,
    name: "RimWorld",
    image: "/images/rimworld.jpg",
    price: "16.49$",
    genre: "Strategy",
  },
  {
    id: 21,
    name: "Forza Horizon 5",
    image: " /images/forzahorizon5.jpg",
    price: "34.99$",
    genre: "Sports",
  },
  {
    id: 22,
    name: "iRacing",
    image: "/images/iracing.jpg",
    price: "19.99$",
    genre: "Sports",
  },
  {
    id: 23,
    name: "Riders Republic",
    image: "/images/ridersrepublic.jpg",
    price: "39.99$",
    genre: "Sports",
  },
  {
    id: 24,
    name: "Out of the Park Baseball 26",
    image: "/images/ootp.jpg",
    price: "22.99$",
    genre: "Sports",
  },
];

let gamesListContainer = document.querySelector(".games-list");
games.forEach((game) => {
  let gameBox = document.createElement("div");
  gameBox.classList.add("game-box");
  gameBox.innerHTML = `
    <img src="${game.image}" alt="${game.name}" class="game-image"/>
    <h3 class="game-name">${game.name}</h3>
    <p class="game-price">${game.price}</p>
    <button type="button" class="btn btn-primary buy-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy Now</button>
  `;
  gamesListContainer.appendChild(gameBox);
});

let allCategoriesButton = document.querySelector(".all");
let actionCategoryButton = document.querySelector(".action");
let adventureCategoryButton = document.querySelector(".adventure");
let rpgCategoryButton = document.querySelector(".rpg");
let strategyCategoryButton = document.querySelector(".strategy");
let sportsCategoryButton = document.querySelector(".sports");

allCategoriesButton.addEventListener("click", () => {
  filterGamesByCategory("all");
});
actionCategoryButton.addEventListener("click", () => {
  filterGamesByCategory("Action");
});
adventureCategoryButton.addEventListener("click", () => {
  filterGamesByCategory("Adventure");
});
rpgCategoryButton.addEventListener("click", () => {
  filterGamesByCategory("RPG");
});
strategyCategoryButton.addEventListener("click", () => {
  filterGamesByCategory("Strategy");
});
sportsCategoryButton.addEventListener("click", () => {
  filterGamesByCategory("Sports");
});
function filterGamesByCategory(category) {
  gamesListContainer.innerHTML = "";
  let filteredGames = [];
  if (category === "all") {
    filteredGames = games;
  } else {
    filteredGames = games.filter((game) => game.genre === category);
  }
  filteredGames.forEach((game) => {
    let gameBox = document.createElement("div");
    gameBox.classList.add("game-box");
    gameBox.innerHTML = `
      <img src="${game.image}" alt="${game.name}" class="game-image"/>
      <h3 class="game-name">${game.name}</h3>
      <p class="game-price">${game.price}</p>
      <button class="btn btn-primary buy-button">Buy Now</button>
    `;
    gamesListContainer.appendChild(gameBox);
  });
}
