const boxarts = [
    // GBA Games
    { image: "sd-gba.png", page: "games/sd-gba.html" },
    { image: "sd2mu-gba.png", page: "games/sd2mu-gba.html" },
    { image: "sdcc-gba.png", page: "games/sdcc-gba.html" },
    { image: "sdmm-gba.png", page: "games/sdmm-gba.html" },
    { image: "sdu-gba.png", page: "games/sdu-gba.html" }
];

const cards = [...boxarts];

const gameBoard = document.getElementById("boxarts");

cards.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.card = game;

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("card-front");

    const frontImage = document.createElement("img");
    frontImage.src = "images/" + game.image;

    front.appendChild(frontImage);
    inner.appendChild(front);
    card.appendChild(inner);

    card.addEventListener("click", () => {
        window.location.href = game.page;
    });

    gameBoard.appendChild(card);
});