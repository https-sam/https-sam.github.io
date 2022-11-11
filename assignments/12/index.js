const keys = Array.from(document.querySelectorAll(".phone-key"));
const enteredNum = document.getElementById("phone-number");
const deleteBtn = document.getElementById("delete-btn");
const converBtn = document.getElementById("convert-btn");
const BINARY = /^[01]*$/;

function isValuidBinary(val) {
  if(!BINARY.test(enteredNum.innerHTML)) {
    enteredNum.innerHTML = val;
    return false;
  }
  return true
}

deleteBtn.addEventListener("click", () => {
  const num = enteredNum.innerHTML;
  if (num.length === 0) return;
  document.getElementById("phone-number").innerHTML = num.substring(
    0,
    num.length - 1
  );
});


converBtn.addEventListener("click", () => {
  if( !isValuidBinary("") || enteredNum.innerHTML.length === 0) return;
  else enteredNum.innerHTML = BigInt('0b' + enteredNum.innerHTML)
})

for (const key of keys) {
  const val = parseInt(key.innerHTML);
  key.addEventListener("click", () => {
    if(isValuidBinary(key.innerHTML)) {
      if (isNaN(val)) return;
      enteredNum.innerText += val;
    }
  });
}