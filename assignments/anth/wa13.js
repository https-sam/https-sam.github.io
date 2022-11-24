const pfps = [
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/matisseheadshot.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/vangoghheadshot1.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/vangoghheadshot2.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/vangoghheadshot3.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/vangoghheadshot4.png?raw=true",
  "https://github.com/anthonypinter/anthonypinter.github.io/blob/master/assets/headshots/watercolorheadshot.png?raw=true"
]

const refreshPfp = () => {
    document.getElementById('pfp').src = pfps[Math.floor(Math.random() * (pfps.length))] || pfps[0]
}
refreshPfp();
/******** Generating a random pfp *******/




/*********** Functions to animate when switching sections ************/

// getting section elements to be removed / opened
// define more sections / pages here
const homeSection = document.querySelector('.home-section')
const aboutSection = document.querySelector('.about-section')
const publicationsSection = document.querySelector('.publications-section')
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
      element.id = "hiddenSection" // setting id to hiddenSection
      resolve()
    }, 200)
  })
}

/**
 * @param {HTMLelement} sectionToBeDisplayed 
 */
const switchSection = (sectionToBeDisplayed) => {
  refreshPfp() // refreshing the pfp

  const currSection = document.getElementById("displayedSection") // A section currently being displayed
  animateAndRemove(currSection) // remove it
  .then(() => {
    sectionToBeDisplayed.id = "displayedSection"
    sectionToBeDisplayed.style.display = "block" // displaying new section
  })
}


// attaching the function to the event listeners of the buttons
document.getElementById("home-btn").addEventListener('click', () => switchSection(homeSection))
document.getElementById("about-btn").addEventListener('click', () => switchSection(aboutSection))
document.getElementById("publications-btn").addEventListener('click', () => switchSection(publicationsSection))