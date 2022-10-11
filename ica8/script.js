document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("btn1").style.backgroundColor = "red";
  alert("Button color has been changed to red");
});

document.addEventListener("keydown", (e) => {
  document.getElementById(
    "key-event-paragraph"
  ).innerHTML = `You pressed ${e.key}`;
});
