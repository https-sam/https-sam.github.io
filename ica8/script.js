document.getElementById("btn1").addEventListener("click", () => {
  alert("You clicked on btn1");
});

document.addEventListener("keydown", (e) => {
  document.getElementById(
    "key-event-paragraph"
  ).innerHTML = `You pressed ${e.key}`;
});
