const card = document.querySelector(".card");
const btn = document.querySelector(".request-btn");
const cardBack = document.querySelector(".card__back");
const cardFront = document.querySelector(".card__front");

btn.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
    cardBack.setAttribute("data-visible", true);
    cardFront.setAttribute("data-visible", false);
});