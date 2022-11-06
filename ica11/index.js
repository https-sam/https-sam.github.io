const API_URI = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const ERROR_MESSAGE = "Error Occured while fetching data, Please try again.";
const QUOTE_CONTAINER = document.getElementById("js-quote-text");

const fetchQuote = () => {
  document.getElementById("loading-icon").style.display = "block";
  document.getElementById("btn-text").style.display = "none";

  return new Promise((resolve, reject) => {
    fetch(API_URI)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data?.message !== "undefined") resolve(data);
        else throw new Error(ERROR_MESSAGE);
      })
      .catch((e) => reject(e));
  });
};

const displayQuote = (text) => {
  QUOTE_CONTAINER.innerText = text;
};

const getQuote = () => {
  console.log("Fetching a new quote . . .");
  fetchQuote()
    .then(({ message }) => {
      console.log(message);
      displayQuote(message);
      localStorage.setItem("quote", message);
      document
        .getElementById("js-tweet")
        .setAttribute(
          "href",
          `http://twitter.com/intent/tweet?text=${message}`
        );

      document.getElementById("loading-icon").style.display = "none";
      document.getElementById("btn-text").style.display = "block";
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    });
};

const btn = document.querySelector("#js-new-quote");
btn.addEventListener("click", getQuote);
getQuote();

// not sure if we need to store the previous quote? if so here's the code
// if (typeof localStorage !== "undefined" && localStorage.getItem("quote")) {
//  displayQuote(localStorage.getItem("quote"));
//}
