   document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const interestForm = document.getElementById("interestForm");
    const interestTagsDiv = document.getElementById("interestTags");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const username = formData.get("username");
        const password = formData.get("password");
        // You can handle user login/authentication here (e.g., send data to the server).
        console.log("Username:", username);
        console.log("Password:", password);
    });

    interestForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(interestForm);
        const interest = formData.get("interest");
        interestTagsDiv.innerHTML += `<span class="interest-tag">${interest}</span>`;
        // You can send the interest data to the server for storage or processing.
        interestForm.reset();
    });
}); 

/////////////////////////////////////////////////////////////////
// this is strating code 
///////////////////////////////////
// JavaScript
/*document.addEventListener("DOMContentLoaded", () => {
    const interestForm = document.getElementById("interestForm");
    const interestTagsDiv = document.getElementById("interestTags");
    const addInterestButton = document.getElementById("addInterestButton");
  
    addInterestButton.addEventListener("click", () => {
      const interestInput = document.getElementById("interestInput");
      const interest = interestInput.value.trim();
  
      if (interest) {
        interestTagsDiv.innerHTML += `<span class="interest-tag">${interest}</span>`;
        interestInput.value = ""; // Clear the input field after adding the interest.
      }
    });
  });
  */
