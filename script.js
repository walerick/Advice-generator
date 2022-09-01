function generateAdvice() {
  fetch("https://api.adviceslip.com/advice").then((response) =>
    response.json().then(({ slip }) => {
      const adviceId = document.querySelector(".adviceId");
      const quote = document.querySelector(".quote");

      adviceId.textContent = slip.id;
      quote.textContent = slip.advice;
    })
  );
}

generateAdvice();

const dice = document.querySelector(".dice-holder");

dice.addEventListener("click", generateAdvice);
