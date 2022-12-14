const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  "It was 94 fahrenheit in my car, so :insertx: got out of the car. After 10 mins, :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, and he was so suprised that he passed out — :insertx: weighs 300 pounds, and it was freezing outside";

const insertX = ["Santa does not exist", "Small Mammy", "Write and erase"];
const insertY = [
  "the banana in the kitchen",
  "Universal studio",
  "The Red room",
];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

const removeThis = (str) => {
  return (regex = new RegExp(str, "g"));
};

function result() {
  const fTemp = 94;
  const pWeight = 300;
  let newstory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  if (customName.value !== "") {
    const name = customName.value;
    newstory = newstory.replace(removeThis("Bob"), name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(pWeight * 0.453592);
    const temperature = Math.round((5 / 9) * (fTemp - 32));
    newstory = newstory.replace("94 fahrenheit", temperature + " centigrade");
    newstory = newstory.replace("300 pounds", weight + " stone");
  }

  story.textContent = newstory
    .replace(removeThis(":insertx:"), xItem)
    .replace(removeThis(":inserty:"), yItem)
    .replace(removeThis(":insertz:"), zItem);
  story.style.visibility = "visible";
}
