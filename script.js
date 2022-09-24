const themeBlue = "#62BAF3";
const themeGray = "#6D7989";

const sideItems = document.querySelectorAll(".side-bar-item");

function disableOtherItems(thisItem) {
  for (const item of sideItems) {
    item.style.borderColor = themeGray;
    item.style.color = themeGray;
    item.style.fontWeight = "100";
  }
}

for (const item of sideItems) {
  item.addEventListener("click", () => {
    disableOtherItems(item);
    item.style.borderColor = themeBlue;
    item.style.color = themeBlue;
    item.style.fontWeight = "bold";
  });
}
