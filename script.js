function validateForm() {
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    let isValid = true;
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        isValid = false;
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    const password = document.getElementById("password").value;
    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        isValid = false;
    }

    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword.trim() === "") {
        document.getElementById("confirmPasswordError").innerText = "Confirm Password is required.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}
