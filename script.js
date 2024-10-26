var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var photoInput = document.getElementById('photo');
var schoolInput = document.getElementById('school');
var degreeInput = document.getElementById('degree');
var companyInput = document.getElementById('company');
var roleInput = document.getElementById('role');
var skillsInput = document.getElementById('skills');
var projectsInput = document.getElementById('projects');
var outputName = document.getElementById('outputName');
var outputEmail = document.getElementById('outputEmail');
var outputPhone = document.getElementById('outputPhone');
var outputPhoto = document.getElementById('outputPhoto');
var outputSchool = document.getElementById('outputSchool');
var outputDegree = document.getElementById('outputDegree');
var outputCompany = document.getElementById('outputCompany');
var outputRole = document.getElementById('outputRole');
var outputSkills = document.getElementById('outputSkills');
var outputProjects = document.getElementById('outputProjects');
var formArea = document.getElementById('form-area');
var outputArea = document.getElementById('output');
var submitBtn = document.getElementById('submitButton');
var editBtn = document.getElementById('editBtn');
submitBtn.addEventListener('click', function () {
    formArea.style.display = 'none';
    outputArea.style.display = "block";
    if (photoInput.files && photoInput.files.length > 0) {
        var file = photoInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                outputPhoto.innerHTML = "<img src=\"".concat(e.target.result, "\" alt=\"Uploaded Photo\" style=\"width: 150px; height: 150px; border-radius: 50%; border: 2px solid #4a90e2; background-position: center; background-repeat: no-repeat; background-size: cover; margin: 20px 0\">");
            }
        };
        reader.readAsDataURL(file);
    }
    else {
        outputPhoto.innerHTML = "<p>No photo uploaded</p>";
    }
    outputName.textContent = nameInput.value;
    outputEmail.textContent = emailInput.value;
    outputPhone.textContent = phoneInput.value;
    outputSchool.textContent = schoolInput.value;
    outputDegree.textContent = degreeInput.value;
    outputCompany.textContent = companyInput.value;
    outputRole.textContent = roleInput.value;
    outputSkills.textContent = skillsInput.value;
    outputProjects.textContent = projectsInput.value;
});
editBtn.addEventListener('click', function () {
    outputArea.style.display = "none";
    formArea.style.display = "block";
});
