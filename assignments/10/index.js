const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const selectedImage = document.querySelector(".displayed-img");
const overlay = document.querySelector(".overlay");
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

for (const image of images) {
  const appendImage = document.createElement("img");
  appendImage.setAttribute("src", `images/${image}`);
  appendImage.setAttribute("alt", image);
  thumbBar.appendChild(appendImage);
  appendImage.addEventListener("click", (e) => {
    selectedImage.src = e.target.src;
    selectedImage.alt = e.target.alt;
  });
}

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
