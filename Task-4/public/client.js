const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const strengthMsg = document.getElementById("strengthMsg");
const matchMsg = document.getElementById("matchMsg");

password.addEventListener("input", () => {
    const value = password.value;
    let strength = "";

    if (value.length < 6) strength = "weak";
    else if (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.length >= 8) strength = "strong";
    else strength = "medium";

    strengthMsg.textContent = `Password strength: ${strength}`;
    strengthMsg.style.color = strength === "strong" ? "green" : strength === "medium" ? "orange" : "red";
});

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value === password.value) {
        matchMsg.textContent = "Passwords match ✔";
        matchMsg.style.color = "green";
    } else {
        matchMsg.textContent = "Passwords do not match ✖";
        matchMsg.style.color = "red";
    }
});
