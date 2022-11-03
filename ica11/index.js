const API_URI = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

const fetchQuote = () => {
  return new Promise((resolve, reject) => {
    fetch(API_URI)
      .then((res) => resolve(res.json()))
      .catch((e) => reject(`Error: ${e}`));
  });
};

const displayQuote = (text) => {
  document.getElementById("js-quote-text").innerText = text;
};

const getQuote = () => {
  console.log("Fetching a new quote");
  fetchQuote()
    .then((data) => {
      console.log(data);
      displayQuote(data?.message);
      localStorage.setItem("quote", data?.message);
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    });
};

const btn = document.querySelector("#js-new-quote");
btn.addEventListener("click", getQuote);

// not sure if we need to store the previous quote? if no here the code
if (typeof localStorage !== "undefined" && localStorage.getItem("quote")) {
  displayQuote(localStorage.getItem("quote"));
}

getQuote();
