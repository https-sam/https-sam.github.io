const keys = Array.from(document.querySelectorAll(".phone-key"));
const enteredNum = document.getElementById("phone-number");
const deleteBtn = document.getElementById("delete-btn");
const converBtn = document.getElementById("convert-btn");

deleteBtn.addEventListener("click", () => {
  const num = enteredNum.innerHTML;
  if (num.length === 0) return;
  document.getElementById("phone-number").innerHTML = num.substring(
    0,
    num.length - 1
  );
});

converBtn.addEventListener("click", () => {
  enteredNum.innerHTML = BigInt('0b' + enteredNum.innerHTML)
})

for (const key of keys) {
  const val = parseInt(key.innerHTML);
  key.addEventListener("click", () => {
    if (isNaN(val)) return;
    enteredNum.innerText += val;
  });
}



