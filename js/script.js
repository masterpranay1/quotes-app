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

const getQuote = () => {
  fetch('https://api.quotable.io/random')
  .then(res => res.json())
  .then(data => {
    quotesList.push(data.content);
    quoteAuthorList.push(data.author);
  })
  .then(e => updateUi());
};

const updateUi = () => {
  quoteArea.innerHTML = quotesList[number];
  authorArea.innerHTML = quoteAuthorList[number];
};

const loadingUi = () => {
  quoteArea.innerHTML = 'Loading';
  authorArea.innerHTML = '';
}

getQuote();

next.addEventListener('click', () => {
  number++;
  loadingUi();
  getQuote();
});

prev.addEventListener('click', () => {
  if(number != 0)
  number--, updateUi();
});