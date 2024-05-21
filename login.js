document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    loginUser();
});

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.password === password) {
            document.getElementById('loginMessage').textContent = 'Login successful!';
            document.getElementById('loginMessage').style.color = 'green';
        } else {
            document.getElementById('loginMessage').textContent = 'Incorrect password.';
        }
    } else {
        document.getElementById('loginMessage').textContent = 'User not found.';
    }
}
