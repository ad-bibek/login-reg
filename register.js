document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    saveData();
});

function saveData() {
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (localStorage.getItem(email)) {
        document.getElementById('regMessage').textContent = 'User already exists.';
    } else {
        let userData = {
            fName: fName,
            lName: lName,
            email: email,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(userData));
        document.getElementById('regMessage').textContent = 'Registration successful!';
        document.getElementById('regMessage').style.color = 'green';
    }
}
