const keys = Array.from(document.querySelectorAll(".phone-key"));
const enteredNum = document.getElementById("phone-number");
const deleteBtn = document.getElementById("delete-btn");

deleteBtn.addEventListener("click", () => {
  const num = enteredNum.innerHTML;
  if (num.length === 0) return;
  document.getElementById("phone-number").innerHTML = num.substring(
    0,
    num.length - 1
  );
});

for (const key of keys) {
  const val = 10 - parseInt(key.innerHTML);
  key.addEventListener("click", () => {
    if (enteredNum.innerHTML.length > 11) return;
    enteredNum.innerText += val;
  });
}
