document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    saveData();
});

function saveData() {
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let regMessage = document.getElementById('regMessage');

    
    if (!validateEmail(email)) {
        regMessage.textContent = 'Invalid email format.';
        regMessage.style.color = 'red';
        return;
    }

    if (password !== confirmPassword) {
        regMessage.textContent = 'Passwords do not match.';
        regMessage.style.color = 'red';
        return;
    }

    if (!validatePassword(password)) {
        regMessage.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
        regMessage.style.color = 'red';
        return;
    }

    if (localStorage.getItem(email)) {
        regMessage.textContent = 'User already exists.';
        regMessage.style.color = 'red';
    } else {
        let userData = {
            fName: fName,
            lName: lName,
            email: email,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(userData));
        regMessage.textContent = 'Registration successful!';
        regMessage.style.color = 'green';
        document.getElementById('registrationForm').reset();
    }
}

function validateEmail(email) {
    // Regular expression for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // Regular expression for password validation
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}
