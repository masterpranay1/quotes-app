const body = document.querySelector("body");
const darkMode = document.querySelector(".darkModeToggle");
const quotesList = [];
const quoteAuthorList = [];
const quoteArea = document.querySelector("#quoteArea");
const authorArea = document.querySelector("#author");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let number = 0;

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode-theme");
});

let updateUi = e => {
    quoteArea.innerHTML = quotesList[number];
    authorArea.innerHTML = quoteAuthorList[number];
};

let getQuote = (e) => {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes?limit=50")
    .then((res) => res.json())
    .then((data) => {
      data.data.forEach((e) => {
        quotesList.push(e.quoteText);
        quoteAuthorList.push(e.quoteAuthor);
      });
    })
    .then(e => updateUi());
};
getQuote();


prev.addEventListener('click', () => {
    if(number > 0)
    {
        number--;
        updateUi();
    }
});
next.addEventListener('click', () => {
    if(number < 49)
    {
        number++;
        updateUi();
    }
});