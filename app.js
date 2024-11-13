const overlayButton = document.querySelector(".overlay-button");
const personalDetailsContainer = document.querySelector(".blurred-contents-container");
const resumePreview = document.querySelector(".resume-preview");
const addMoreButton = document.querySelector(".add-more-button");
let resumeInputsAll = document.querySelector(".resume-inputs");
const dropDownItems = document.querySelector(".dropdown");
let detailsAdded = false;

overlayButton.addEventListener("click", () => {
    overlayButton.remove();
    personalDetailsContainer.style.filter = "none";
    personalDetailsContainer.style.pointerEvents = 'auto'; 
    resumePreview.style.flex = "1";
    
  })

addMoreButton.addEventListener('click', () => {
  if(detailsAdded) {
    resumeInputsAll.style.height = "62%";
    addMoreButton.innerHTML = "Add more details &#9660;"
  }
  else {
    resumeInputsAll.style.height = `${resumeInputsAll.scrollHeight}px`;
    addMoreButton.innerHTML = "Hide additional details &#9650;"
  }

  detailsAdded = !detailsAdded;
});

function addDetails () {
  resumeInputsAll.innerHTML += `
          <div class="input-container">
            <label class="label" for="address">Address</label>
            <input class="input-field" type="text" id="address">
          </div>
          <div class="input-container">
            <label class="label" for="postalCode">Postal Code</label>
            <input class="input-field" type="text" id="postalCode">
          </div>
          <div class="input-container">
            <label class="label" for="drivingLicense">Driving License</label>
            <input class="input-field" type="text" id="drivingLicense">
          </div>
          <div class="input-container">
            <label class="label" for="Nationality">Nationality</label>
            <input class="input-field" type="text" id="Nationality">
          </div>
          <div class="input-container">
            <label class="label" for="pob">Place Of Birth</label>
            <input class="input-field" type="text" id="pob">
          </div>
          <div class="input-container">
            <label class="label" for="dob">Date Of Birth</label>
            <input class="input-field" type="text" id="dob">
          </div>
  `

  addMoreButton.innerHTML = "Hide additional details &#9650;"
  detailsAdded = true;
}

function hideDetails () {

    resumeInputsAll.innerHTML = `
            <div class="input-container">
              <label class="label" for="role" required>Job Title</label>
              <input class="input-field" type="text" id="role" placeholder="The role you want">
            </div>
            <div class="input-container">
              <input class="input-field" type="file" id="file" accept="image/*" style="display: none;">
              <label class="label" for="file">Upload</label>
            </div>
            <div class="input-container">
              <label class="label" for="first">First Name</label>
              <input class="input-field" type="text" id="first">
            </div>
            <div class="input-container">
              <label class="label" for="last">Last Name</label>
              <input class="input-field" type="text" id="last">
            </div>
            <div class="input-container">
              <label class="label" for="email">Email</label>
              <input class="input-field" type="text" id="email">
            </div>
            <div class="input-container">
              <label class="label" for="phone">Phone</label>
              <input class="input-field" type="text" id="phone">
            </div>
            <div class="input-container">
              <label class="label" for="country">Country</label>
              <input class="input-field" type="text" id="country">
            </div>
            <div class="input-container">
              <label class="label" for="city">City</label>
              <input class="input-field" type="text" id="city">
            </div class="input-container">
    `

    addMoreButton.innerHTML = "Hide additional details &#9660;"
    detailsAdded = false;
}




