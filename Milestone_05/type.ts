// Get refrance to the form and display area.
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

const shareableLinkContainer = document.getElementById("sherablie-link-container") as HTMLDivElement;
const shareableLinkElement = document.getElementById("sherablie-link") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;

// Handle form submishion.
form.addEventListener("submit", (event:Event) => {
    event.preventDefault();

// Collect input values.
    const userName = (document.getElementById("userName") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experiance = (document.getElementById("experiance") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

// Save the data in localStorage with user name as the key.
    const resumeData = {
      name,
      email,
      phone,
      education,
      experiance,
      skills,
    };
    localStorage.setItem(userName, JSON.stringify(resumeData));

// Generate the resume content dynamically.
    const resumeHTML = 
    `<h2><b>Editable Resume</b></h2>
     <h3>Personal Information</h3>
     <p><b>Name :</b><span contenteditable="true">${name}</span></p>
     <p><b>Email :</b><span contenteditable="true">${email}</span></p>
     <p><b>Phone :</b><span contenteditable="true">${phone}</span></p>
     
     <h3>Education</h3>
     <p contenteditable="true">${education}</p>
     
     <h3>Experiance</h3>
     <p contenteditable="true">${experiance}</p>
     
     <h3>Skills</h3>
     <p contenteditable="true">${skills}</p>`;

// Display the generated resume.
     resumeDisplayElement.innerHTML = resumeHTML;

// Generate a shereable URL with user name only.
     const shareableURL = `${window.location.origin}?userName=${encodeURIComponent(userName)}`;

// Display the sheareable link.
     shareableLinkContainer.style.display = "block";
     shareableLinkElement.href = shareableURL;
     shareableLinkElement.textContent = shareableURL;
});

//Handle PDF Download.
     downloadPdfButton.addEventListener( "click", () => {
      window.print();
     });

//Preefill the form based on the user name in the URL.
     window.addEventListener("DOMContentLoaded", ()=> {
      const urlParams = new URLSearchParams(window.location.search);
      const userName = urlParams.get("userName");

      if (userName) {
         const savedResumeData = localStorage.getItem(userName);
         if(savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById("userName") as HTMLInputElement).value = userName;
            (document.getElementById("name") as HTMLInputElement).value = resumeData.Data.name;
            (document.getElementById("email") as HTMLInputElement).value = resumeData.name;
            (document.getElementById("phone") as HTMLInputElement).value = resumeData.phone;
            (document.getElementById("education") as HTMLInputElement).value = resumeData.education;
            (document.getElementById("experiance") as HTMLInputElement).value = resumeData.experiance;
            (document.getElementById("skills") as HTMLInputElement).value = resumeData.skills;
         }
      }
   });