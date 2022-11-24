const pfps = [
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/matisseheadshot.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/vangoghheadshot1.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/vangoghheadshot2.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/vangoghheadshot3.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/vangoghheadshot4.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/watercolorheadshot.png?raw=true"
]

const refreshPfp = () => {
  document.getElementById('pfp').src = pfps[Math.floor(Math.random() * (5 - 0))]
}
refreshPfp();
/******** Generating a random pfp *******/




/*********** Functions to animate when switching sections ************/

// getting section elements to be removed / opened
const homeSection = document.getElementById('home')
const aboutSection = document.getElementById('about')

/**
 * @param {HTMLelement} 
 * @returns {Promise}
 * This function animates and removes the element passed
 * First sets the element's opacity to 0 (which is animated in the css file)
 * then, waits for 200ms and sets display to none, which removes the element from the DOM tree
 */
const animateAndRemove = (element) => {
  return new Promise((resolve) => {
    element.style.opacity = '0';
    setTimeout(() => {
      element.style.display = 'none';
      element.style.opacity = '100'; // setting back the opacity so it appears on the page later when this option is selected
      resolve()
    }, 200)
  })
}

/**
 * @param {HTMLelement} el1 - an element to be removed
 * @param {HTMLelement} el2 - an element to be opened
 */
const removeThisAndDisplayThis = async (el1, el2) => {
  refreshPfp() // refreshing the pfp
  await animateAndRemove(el2) // removing el1
  .then(() => {
    el1.style.display = "block" // opening el2
  })
}


// attaching the function to the event listeners of the buttons
document.getElementById("home-btn").addEventListener('click', () => removeThisAndDisplayThis(homeSection, aboutSection))
document.getElementById("about-btn").addEventListener('click', () => removeThisAndDisplayThis(aboutSection, homeSection))