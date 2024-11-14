const overlayButton = document.querySelector(".overlay-button");
const personalDetailsContainer = document.querySelector(".blurred-contents-container");
const resumePreview = document.querySelector(".resume-preview");
const addMoreButton = document.querySelector(".add-button");
let resumeInputsAll = document.querySelector(".resume-inputs");
const dropDownItems = document.querySelector(".dropdown");
let detailsAdded = false;

overlayButton.addEventListener("click", () => {
    overlayButton.remove();
    personalDetailsContainer.style.filter = "none";
    personalDetailsContainer.style.pointerEvents = 'auto'; 
    resumePreview.style.flex = "1.3";
    
  })

addMoreButton.addEventListener('click', () => {
  if(detailsAdded) {
    resumeInputsAll.style.height = "63%";
    addMoreButton.innerHTML = "Add more details &#9660;"
  }
  else {
    resumeInputsAll.style.height = `${resumeInputsAll.scrollHeight}px`;
    addMoreButton.innerHTML = "Hide additional details &#9650;"
  }

  detailsAdded = !detailsAdded;
});



