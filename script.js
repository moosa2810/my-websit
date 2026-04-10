function validateForm() {
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let valid = true;

    // Clear previous errors
    document.getElementById("fnameError").innerText = "";
    document.getElementById("lnameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";

    if (fname === "") {
        document.getElementById("fnameError").innerText = "First name is missing";
        valid = false;
    }

    if (lname === "") {
        document.getElementById("lnameError").innerText = "Last name is missing";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is missing";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passError").innerText = "Password is missing";
        valid = false;
    }

    if (valid) {
        document.getElementById("formPage").style.display = "none";
        document.getElementById("successPage").style.display = "block";
    }
}