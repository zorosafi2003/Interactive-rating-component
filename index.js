const mainContainer = document.querySelector(".rating__section")
const thanksContainer = document.querySelector(".thanks__section")
const submitButton = document.getElementById("rating-section__btn")
// const rateAgain = document.getElementById("rate-again")
const ratings = document.querySelectorAll(".rating span")
const actualRating = document.getElementById("current-rate")

submitButton.addEventListener("click", () => {
  mainContainer.classList.add("hidden")
  thanksContainer.classList.remove("hidden")
});

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    this.resetRating();
    actualRating.innerHTML = rating.innerHTML;
    rating.classList.add("active")
  })
});

function resetRating() {
  ratings.forEach(rate => {
    rate.classList.remove("active")
  })
}