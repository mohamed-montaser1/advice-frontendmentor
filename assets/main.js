let api_link = "https://api.adviceslip.com/advice";
let advice_id = document.getElementById("id");
let quate = document.getElementById("q");
let changeAdvice = document.querySelector(".change-advice");

fetchingAdvice();

changeAdvice.addEventListener("click", (e) => {
  fetchingAdvice();
});

async function fetchingAdvice() {
  await fetch(api_link)
    .then((res) => res.json())
    .then((data) => {
      advice_id.innerHTML = data.slip.id;
      quate.innerHTML = data.slip.advice;
    });
}
