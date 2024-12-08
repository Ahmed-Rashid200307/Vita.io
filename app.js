const overlayButton = document.querySelector(".overlay-button");
const personalDetailsContainer = document.querySelector(".blurred-contents-container");
const resumePreview = document.querySelector(".resume-preview");
const addMoreButton = document.querySelector(".js-add-more-details");
let resumeInputsAll = document.querySelector(".resume-inputs");
const dropDownItems = document.querySelector(".dropdown");
const historyContainer = document.querySelector(".employment-history-container");
const addMoreHistory = document.querySelectorAll(".js-add-more-employement");
let collapseButton = document.querySelectorAll(".js-collapse-button");
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

let containerNum = 3;
addMoreHistory.forEach((button) => {
  
  button.addEventListener('click', () => {
    console.log(button.dataset.containerName);
    if(button.dataset.containerName === "employment-container") {
      document.querySelector(".employment-history-container").innerHTML += `
                <div class="single-history-container js-history-container-${containerNum}">
                  <div class="container-name">
                  <label class="container-name-label js-label-${containerNum}">(Not Specified)</label>
                    <button class="js-collapse-button" data-id="container-${containerNum}">&#x23F6;</button>
                  </div>
                  <div class="history-input-container">
                    <label class="label" id="previous-job-title">Job title</label>
                  <input class="input-field js-title-name" id="previous-job-title" data-label="label-${containerNum}" maxlength="25">
                  </div>
                  <div class="history-input-container">
                    <label class="label" id="employer">Employer</label>
                    <input class="input-field" id="employer">
                  </div>
                  <div class="history-input-container">
                    <label class="label" id="start-date">Start Date</label>
                    <input class="input-field" type="date" id="start-date">
                  </div>
                  <div class="history-input-container">
                    <label class="label" id="end-date">End Date</label>
                    <input class="input-field" type="date" id="end-date">
                  </div>
                  <div class="history-summary-container">
                    <textarea class="job-history-summary" type="text" placeholder="Experienced and dedicated professional with a background in computer ..." maxlength="600"></textarea>
                  </div>
                </div>
      `;
    }
    else if(button.dataset.containerName === "education-container") {
      document.querySelector(".education-history-container").innerHTML += `
            <div class="single-history-container js-history-container-${containerNum}">
              <div class="container-name">
                <label class="container-name-label js-label-${containerNum}">(Not Specified)</label>
                <button class="js-collapse-button" data-id="container-${containerNum}">&#x23F6;</button>
              </div>
              <div class="history-input-container">
                <label class="label" id="previous-job-title">Institute</label>
                <input class="input-field js-title-name" id="previous-job-title" data-label="label-${containerNum}" maxlength="25">
              </div>
              <div class="history-input-container">
                <label class="label" id="employer">Degree</label>
                <input class="input-field" id="employer">
              </div>
              <div class="history-input-container">
                <label class="label" id="start-date">Start Date / End Date</label>
                <input class="input-field date-input" type="date" id="start-date">
                <input class="input-field date-input" type="date" id="end-date">
              </div>
              <div class="history-input-container">
                <label class="label" id="end-date">City</label>
                <input class="input-field" type="text">
              </div>
              <div class="history-summary-container">
                <textarea class="job-history-summary" type="text" placeholder="Experienced and dedicated professional with a background in computer ..." maxlength="600"></textarea>
              </div>
            </div>
      `
    }
    else if(button.dataset.containerName === "social-container") {
      document.querySelector(".social-container").innerHTML += `
        <div class="single-history-container js-history-container-${containerNum}">
          <div class="container-name">
            <label class="container-name-label js-label-${containerNum}">(Not Specified)</label>
          </div>
          <div class="history-input-container">
            <label class="label" id="previous-job-title">Label</label>
            <input class="input-field js-title-name" id="previous-job-title" data-label="label-${containerNum}" maxlength="25">
          </div>
          <div class="history-input-container">
            <label class="label" id="employer">Link</label>
            <input class="input-field" id="employer">
          </div>
        </div>
        `
    }
    collapseButton = document.querySelectorAll(".js-collapse-button");
    containerNum++;
    
    addCollapseListerner();
    updateTitle();
  })
})


function addCollapseListerner() {
  collapseButton.forEach((button) => {
  
    button.addEventListener('click', () => {
      const buttonId = button.dataset.id;
      console.log(buttonId);
      const employmentHistoryContainer = document.querySelector(`.js-history-${buttonId}`);
      if(employmentHistoryContainer.style.height === "56px") {
        employmentHistoryContainer.style.height = "440px";
        button.innerHTML = "&#x23F6;";
      }
      else{
        employmentHistoryContainer.style.height = "56px";
        button.innerHTML = "&#x23F7;";
      }
    })
  })
}

addCollapseListerner();

function updateTitle() {
const containerTitle = document.querySelectorAll(".js-title-name");
containerTitle.forEach( titleInput => {
  titleInput.addEventListener('input', () => {
    const labelToUpdate = document.querySelector(`.js-${titleInput.dataset.label}`);
    if(titleInput.value === "") {
      labelToUpdate.innerHTML = "(Not Specified)";
    }
    else {
      labelToUpdate.innerHTML = titleInput.value;
    }
  })
});
}

updateTitle();

function resetBackgroundColor() {
  colorSliders.forEach((slider) => {
    slider.style.backgroundColor = "rgb(241, 242, 255)"; // Default color
  });
}

const colorSliders = document.querySelectorAll(".slider");
colorSliders.forEach((slider) => {
  slider.addEventListener("change", () => {
    const backgroundColor = slider.dataset.bgColor;
    const color = slider.dataset.color;
    
    console.log(backgroundColor);
    console.log(color);

    slider.style.backgroundColor = color;

    colorSliders.forEach(button => {  
      if(button !== slider) {  
          button.style.backgroundColor = backgroundColor;
      }

    })
  });
});