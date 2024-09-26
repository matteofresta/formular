document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to validate first

    // Get form values
    const fullNameField = document.getElementById("FullName");
    const phoneField = document.getElementById("Phone");
    const zipCodeField = document.getElementById("zipCode");
    const passwordField = document.getElementById("Password");
    const emailField = document.getElementById("Email");

    const fullName = fullNameField.value.trim();
    const phone = phoneField.value.trim();
    const zipCode = zipCodeField.value.trim();
    const password = passwordField.value.trim();
    const email = emailField.value.trim();

    let isValid = true;


    fullNameField.classList.remove("error");
    phoneField.classList.remove("error");
    zipCodeField.classList.remove("error");
    passwordField.classList.remove("error");
    emailField.classList.remove("error");


    if (fullName === "") {
        fullNameField.classList.add("error");
        isValid = false;
    }


    const phoneRegex = /^[0-9]{10,15}$/;
    if (phone === "" || !phoneRegex.test(phone)) {
        phoneField.classList.add("error");
        isValid = false;
    }


    const zipRegex = /^[0-9]{5}$/;
    if (zipCode === "" || !zipRegex.test(zipCode)) {
        zipCodeField.classList.add("error");
        isValid = false;
    }


    if (password === "" || password.length < 6) {
        passwordField.classList.add("error");
        isValid = false;
    }


    if (email !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailField.classList.add("error");
            isValid = false;
        }
    }

    if (isValid) {
        swal("Sie haben sich vertippt!", "Versuchen sie noch einmal!", "success");
        this.submit()
    } else {
        swal("Sie haben sich vertippt!", "Versuchen sie noch einmal!", "error");
    }

});
