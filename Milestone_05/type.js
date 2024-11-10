// Get refrance to the form and display area.
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("sherablie-link-container");
var shareableLinkElement = document.getElementById("sherablie-link");
var downloadPdfButton = document.getElementById("download-pdf");
// Handle form submishion.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect input values.
    var userName = document.getElementById("userName").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experiance = document.getElementById("experiance").value;
    var skills = document.getElementById("skills").value;
    // Save the data in localStorage with user name as the key.
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experiance: experiance,
        skills: skills,
    };
    localStorage.setItem(userName, JSON.stringify(resumeData));
    // Generate the resume content dynamically.
    var resumeHTML = "<h2><b>Editable Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name :</b><span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>Email :</b><span contenteditable=\"true\">").concat(email, "</span></p>\n     <p><b>Phone :</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n     \n     <h3>Education</h3>\n     <p contenteditable=\"true\">").concat(education, "</p>\n     \n     <h3>Experiance</h3>\n     <p contenteditable=\"true\">").concat(experiance, "</p>\n     \n     <h3>Skills</h3>\n     <p contenteditable=\"true\">").concat(skills, "</p>");
    // Display the generated resume.
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shereable URL with user name only.
    var shareableURL = "".concat(window.location.origin, "?userName=").concat(encodeURIComponent(userName));
    // Display the sheareable link.
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
//Handle PDF Download.
downloadPdfButton.addEventListener("click", function () {
    window.print();
});
//Preefill the form based on the user name in the URL.
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var userName = urlParams.get("userName");
    if (userName) {
        var savedResumeData = localStorage.getItem(userName);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("userName").value = userName;
            document.getElementById("name").value = resumeData.Data.name;
            document.getElementById("email").value = resumeData.name;
            document.getElementById("phone").value = resumeData.phone;
            document.getElementById("education").value = resumeData.education;
            document.getElementById("experiance").value = resumeData.experiance;
            document.getElementById("skills").value = resumeData.skills;
        }
    }
});
