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

    // Basic email validation
    if (!validateEmail(email)) {
        regMessage.textContent = 'Invalid email format.';
        regMessage.style.color = 'red';
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        regMessage.textContent = 'Passwords do not match.';
        regMessage.style.color = 'red';
        return;
    }

    // Password validation
    if (!validatePassword(password)) {
        regMessage.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
        regMessage.style.color = 'red';
        return;
    }

    // Check if user already exists
    if (localStorage.getItem(email)) {
        regMessage.textContent = 'User already exists.';
        regMessage.style.color = 'red';
    } else {
        // Save user data to local storage
        let userData = {
            fName: fName,
            lName: lName,
            email: email,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(userData));
        regMessage.textContent = 'Registration successful! Redirecting to login page...';
        regMessage.style.color = 'green';

        // Redirect to login page after a short delay
        setTimeout(function() {
            location.href = 'login.html';
        }, 2000); // Redirects after 2 seconds
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}
